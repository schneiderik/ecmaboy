import ECMABoy from './../../index';
import Demo from './Demo';

const video = new ECMABoy.Canvas(document.getElementById('ecmaboy-screen'));
const ecmaboy = new ECMABoy(Demo, video);

ecmaboy.on();
