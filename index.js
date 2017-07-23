import Canvas from './lib/Canvas';
import Boot from './lib/Boot';
import GameLoop from './lib/GameLoop';

class ECMABoy {
  constructor (screen) {
    this.screen = screen;
		this.game = new Boot();
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRender = this.handleRender.bind(this);
		this.gameLoop = new GameLoop(this.handleUpdate, this.handleRender);
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

ECMABoy.Canvas = Canvas;

export default ECMABoy;
