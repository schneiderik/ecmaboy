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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  screen: {
    height: 128,
    width: 128
  }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Demo__ = __webpack_require__(13);



const video = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */].Canvas(document.getElementById('ecmaboy-screen'));
const ecmaboy = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__Demo__["a" /* default */], video);

ecmaboy.on();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Boot__ = __webpack_require__(4);



class ECMABoy {
  constructor (Game, video) {
    this.video = video;
    this.game = new Game(this);
    this.boot = new __WEBPACK_IMPORTED_MODULE_1__lib_Boot__["a" /* default */](this, {
      onComplete: this.game.start.bind(this.game)
    });
  }

  on () {
    this.boot.start();
  }
}

ECMABoy.Canvas = __WEBPACK_IMPORTED_MODULE_0__lib_Canvas__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (ECMABoy);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


class Canvas {
  constructor (canvas) {
    this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
		this.imageData = this.context.getImageData(
			0,
			0,
			__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.width,
			__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.height
		);
  }

  render (source) {
		this.imageData.data.set(source);

		this.context.putImageData(this.imageData, 0, 0);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Canvas);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sandbox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_sprite_attributes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpriteCollection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Animation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(0);






class Boot {
  constructor (system, options={}) {
    this.system = system;
    this.onComplete = options.onComplete;
    this.sandbox = new __WEBPACK_IMPORTED_MODULE_0__Sandbox__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].screen.width, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].screen.height);
    this.spriteCollection = new __WEBPACK_IMPORTED_MODULE_2__SpriteCollection__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__boot_sprite_attributes__["a" /* default */]);
    this.shineAnimation = new __WEBPACK_IMPORTED_MODULE_3__Animation__["a" /* default */](this.spriteCollection.get('shine'), {
      throttle: 32,
      onLoopStart: sprite => sprite.set('visible', true),
      onFrameChange: sprite => sprite.transform({translateX: 6}),
      onLoopEnd: sprite => sprite.set('visible', false)
    });
    this.pingAnimation = new __WEBPACK_IMPORTED_MODULE_3__Animation__["a" /* default */](this.spriteCollection.get('ping'), {
      throttle: 32,
      onLoopStart: sprite => sprite.set('visible', true),
      onFrameChange: sprite => sprite.transform({translateY: -1}),
      onLoopEnd: sprite => sprite.set('visible', false)
    });
  }

  start () {
    this.run()
  }

  run (timeSinceLastFrame) {
    this.animationFrameID = window.requestAnimationFrame(this.run.bind(this));
		this.update(timeSinceLastFrame);
		this.render()
  }

  halt (callback) {
		window.cancelAnimationFrame(this.animationFrameID);
		window.requestAnimationFrame(callback.bind(this))
  }

	update (timeElapsed) {
    if (timeElapsed > 500)
      this.shineAnimation.run();

    if (timeElapsed > 948)
      this.spriteCollection.get('extension').set('visible', true);

    if (timeElapsed > 980)
      this.pingAnimation.run();

    if (timeElapsed > 3000)
      this.halt(this.onComplete);
	}

  render () {
    this.sandbox.fill('rgb(0,0,0)');

    this.spriteCollection.getVisible().forEach(m => {
      this.sandbox.drawSprite(m);
    });

    this.system.video.render(this.sandbox.getImageData().data);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Boot);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


class Sandbox {
  constructor(width, height) {
    this.canvas = document.createElement('canvas')

		this.canvas.setAttribute('height', width);
		this.canvas.setAttribute('width', height);

    this.context = this.canvas.getContext('2d');
  }

  getImageData() {
    return this.context.getImageData(0, 0, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.width, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.height);
  }

  fill(color, offsetX=0, offsetY=0, width=__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.width, height=__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].screen.height) {
    this.context.fillStyle = color;
    this.context.fillRect(offsetX, offsetY, width, height);
  }

  drawSprite(sprite) {
    this.context.drawImage(...sprite.getActiveFrame());
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sandbox);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boot_sprite_sheet_gif__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boot_sprite_sheet_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_sprite_sheet_gif__);


let imageEl = document.createElement('img');
imageEl.src = __WEBPACK_IMPORTED_MODULE_0__boot_sprite_sheet_gif___default.a;

/* harmony default export */ __webpack_exports__["a"] = ([
  {
    id: "logo",
    source: imageEl,
    sourceOffsetX: 0,
    sourceOffsetY: 0,
    width: 78,
    height: 18,
    offsetX: 16,
    offsetY: 55,
    visible: true
  },
  {
    id: "extension",
    source: imageEl,
    sourceOffsetX: 79,
    sourceOffsetY: 0,
    width: 16,
    height: 18,
    offsetX: 95,
    offsetY: 55,
    visible: false
  },
  {
    id: "shine",
    source: imageEl,
    sourceOffsetX: 0,
    sourceOffsetY: 18,
    frameDirection: 'right',
    frameCount: 13,
    width: 18,
    height: 18,
    offsetX: 10,
    offsetY: 55,
    visible: false
  },
  {
    id: "ping",
    source: imageEl,
    sourceOffsetX: 96,
    sourceOffsetY: 0,
    frameDirection: 'down',
    frameCount: 2,
    width: 20,
    height: 4,
    offsetX: 94,
    offsetY: 49,
    visible: false
  }
]);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "760855c68df9a85f44fe82b77c08f82e.gif";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpriteModel__ = __webpack_require__(9);


class SpriteCollection {
  constructor(attributeArray) {
    this.models = [];

    if (attributeArray) {
      attributeArray.forEach(attributes => {
        this.add(attributes)
      });
    }
  }

  add(attributes) {
    this.models.push(new __WEBPACK_IMPORTED_MODULE_0__SpriteModel__["a" /* default */](attributes));
  }

  get(id) {
    return this.models.find(m => m.get('id') === id);
  }

  filter(func) {
    return this.models.filter(func);
  }

  getVisible() {
    return this.filter(m => m.get('visible'));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SpriteCollection);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultAttributes = {
  activeFrame: 1
};

class SpriteModel {
  constructor(attributes) {
    this.attributes = Object.assign({}, defaultAttributes, attributes);
  }

  get(attr) {
    return this.attributes[attr];
  }

  set(attr, value) {
    this.attributes[attr] = value;

    return value;
  }

  transform(options={}) {
    const currentOffsetY = this.get('offsetY');
    const currentOffsetX = this.get('offsetX');

    if (options.translateY) {
      this.set('offsetY', currentOffsetY + options.translateY);
    }

    if (options.translateX) {
      this.set('offsetX', currentOffsetX + options.translateX);
    }
  }

  getActiveFrame() {
    return this.getFrame(this.get('activeFrame'));
  }

  getFrameSourceOffsetX(frame) {
    let offsetX = this.get('sourceOffsetX');
    let index = frame - 1;

    if (this.get('frameDirection') === 'left') {
      offsetX = offsetX - (index * this.get('width'));
    }

    if (this.get('frameDirection') === 'right') {
      offsetX = offsetX + (index * this.get('width'));
    }

    return offsetX;
  }

  getFrameSourceOffsetY(frame) {
    let offsetY = this.get('sourceOffsetY');
    let index = frame - 1;

    if (this.get('frameDirection') === 'up') {
      offsetY = offsetY - (index * this.get('height'));
    }

    if (this.get('frameDirection') === 'down') {
      offsetY = offsetY + (index * this.get('height'));
    }

    return offsetY;
  }

  getFrame(frame) {
    return [
      this.get('source'),
      this.getFrameSourceOffsetX(frame),
      this.getFrameSourceOffsetY(frame),
      this.get('width'),
      this.get('height'),
      this.get('offsetX'), 
      this.get('offsetY'),
      this.get('width'),
      this.get('height')
    ]
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SpriteModel);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_throttle__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_throttle__);


const defaultOptions = {
  throttle: 0,
  initialFrame: 1,
  loop: false
};

class Animation {
  constructor(sprite, options={}) {
    this.sprite = sprite;
    this.options = Object.assign({}, defaultOptions, options);
    this.completedInitialFrame = false;
    this.run = __WEBPACK_IMPORTED_MODULE_0_lodash_throttle___default()(() => {
      this._run()
    }, this.options.throttle);
  }

  handleLoopEnd() {
    if (this.options.loop) {
      this.setActiveFrame(1);
    }

    if (this.options.onLoopEnd) {
      this.options.onLoopEnd(this.sprite);
    }
  }

  nextFrame() {
    return this.sprite.get('activeFrame') + 1;
  }

  nextFrameExists() {
    return this.nextFrame() <= this.sprite.get('frameCount');
  }

  setActiveFrame(frame) {
    this.sprite.set('activeFrame', frame);

    if (this.options.onFrameChange) {
      this.options.onFrameChange(this.sprite);
    }
  }

  handleLoop() {
    if (this.nextFrameExists()) {
      this.setActiveFrame(this.nextFrame());
    } else {
      this.handleLoopEnd();
    }
  }

  isLoopStart() {
    return this.sprite.get('activeFrame') === this.options.initialFrame;
  }

  _run(callback) {
    if (this.isLoopStart() && this.options.onLoopStart) {
      this.options.onLoopStart(this.sprite);
    }

    if (this.completedInitialFrame) {
      this.handleLoop();
    } else {
      this.completedInitialFrame = true;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Animation);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(14);



class Demo {
  constructor (system) {
    this.system = system;
  }

  start () {
		this.render();
  }

	update () {
	}

  render () {
    this.canvas = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].canvas.create();
    this.context = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].canvas.getContext(this.canvas);

    this.context.fillStyle = `rgb(192, 192, 192)`;
    this.context.fillRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__lib_constants__["a" /* default */].screen.width, __WEBPACK_IMPORTED_MODULE_0__lib_constants__["a" /* default */].screen.height);
	
    this.system.video.render(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].canvas.getImageData(this.context).data);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Demo);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_constants__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  canvas: {
    create: () => {
      const canvas = document.createElement('canvas')

      canvas.setAttribute('height', __WEBPACK_IMPORTED_MODULE_0__lib_constants__["a" /* default */].screen.height);
      canvas.setAttribute('width', __WEBPACK_IMPORTED_MODULE_0__lib_constants__["a" /* default */].screen.width);

      return canvas;
    },
    getContext: (canvas) => {
      return canvas.getContext('2d');
    },
    getImageData: (context) => {
      return context.getImageData(
        0,
        0,
        __WEBPACK_IMPORTED_MODULE_0__lib_constants__["a" /* default */].screen.width,
        __WEBPACK_IMPORTED_MODULE_0__lib_constants__["a" /* default */].screen.height
      );
    }
  }
});


/***/ })
/******/ ]);