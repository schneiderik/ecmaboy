class Canvas {
  constructor (canvas) {
    this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
  }

  render (source) {
    this.context.drawImage(source, 0, 0);
  }
}

export default Canvas;
