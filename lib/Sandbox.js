import constants from './constants';

class Sandbox {
  constructor(width, height) {
    this.canvas = document.createElement('canvas')

		this.canvas.setAttribute('height', width);
		this.canvas.setAttribute('width', height);

    this.context = this.canvas.getContext('2d');
  }

  getImageData() {
    return this.context.getImageData(0, 0, constants.screen.width, constants.screen.height);
  }

  fill(color, offsetX=0, offsetY=0, width=constants.screen.width, height=constants.screen.height) {
    this.context.fillStyle = color;
    this.context.fillRect(offsetX, offsetY, width, height);
  }

  drawSprite(sprite) {
    this.context.drawImage(...sprite.getActiveFrame());
  }
}

export default Sandbox;
