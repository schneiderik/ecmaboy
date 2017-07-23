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

export default GameLoop;
