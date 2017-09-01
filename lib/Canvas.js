import constants from './constants';

class Canvas {
  constructor (canvas) {
    this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
		this.imageData = this.context.getImageData(
			0,
			0,
			constants.screen.width,
			constants.screen.height
		);
  }

  render (source) {
		this.imageData.data.set(source);

		this.context.putImageData(this.imageData, 0, 0);
  }
}

export default Canvas;
