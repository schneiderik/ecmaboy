/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);


const screen = new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].Canvas(document.getElementById('ecmaboy-screen'));
const ecmaboy = new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */](screen);

ecmaboy.on();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Canvas__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Boot__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_GameLoop__ = __webpack_require__(5);




class ECMABoy {
  constructor (screen) {
    this.screen = screen;
		this.game = new __WEBPACK_IMPORTED_MODULE_1__lib_Boot__["a" /* default */]();
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRender = this.handleRender.bind(this);
		this.gameLoop = new __WEBPACK_IMPORTED_MODULE_2__lib_GameLoop__["a" /* default */](this.handleUpdate, this.handleRender);
  }

  on () {
    this.gameLoop.run();
  }

  off () {
    this.gameLoop.halt();
  }

  handleUpdate (timeSinceLastFrame) {
    this.game.update(timeSinceLastFrame);
  }

  handleRender () {
    this.screen.render(this.game.render());
  }
}

ECMABoy.Canvas = __WEBPACK_IMPORTED_MODULE_0__lib_Canvas__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (ECMABoy);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Canvas {
  constructor (canvas) {
    this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
  }

  render (source) {
    this.context.drawImage(source, 0, 0);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Canvas);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  screen: {
    height: 128,
    width: 128
  }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);



class Boot {
  constructor () {
		this.state = {
			value: 50
		}
  }

	update () {
		this.state = {
			value: (Math.random() >= 0.5) ? this.increaseValue() : this.decreaseValue()
		}
	}

	increaseValue () {
    return this.state.value !== 255 ? (this.state.value + 1) : this.state.value;
	}

	decreaseValue () {
    return this.state.value !== 0 ? (this.state.value - 1) : this.state.value;
	}

  render () {
    const canvas = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].canvas.create();
    const context = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].canvas.getContext(canvas);

    context.fillStyle = `rgba(${this.state.value}, ${this.state.value}, ${this.state.value}, 1)`;
    context.fillRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.width, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.height);

    return canvas;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Boot);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameLoop {
	constructor (update, render) {
		this.update = update;
		this.render = render;

		this.run()
	}

  run (timeSinceLastFrame) {
    this.animationFrameID = window.requestAnimationFrame(this.run.bind(this));

		this.update(timeSinceLastFrame);
		this.render()
  }

	halt () {
		window.cancelAnimationFrame(this.animationFrameID);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (GameLoop);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  canvas: {
    create: () => {
      const canvas = document.createElement('canvas')

      canvas.setAttribute('height', __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.height);
      canvas.setAttribute('width', __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.width);

      return canvas;
    },
    getContext: (canvas) => {
      return canvas.getContext('2d');
    },
    getImageData: (context) => {
      return context.getImageData(
        0,
        0,
        __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.width,
        __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.height
      );
    }
  }
});


/***/ })
/******/ ]);