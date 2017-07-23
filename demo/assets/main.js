import ECMABoy from './../../index.js';

const screen = new ECMABoy.Canvas(document.getElementById('ecmaboy-screen'));
const ecmaboy = new ECMABoy(screen);

ecmaboy.on();
