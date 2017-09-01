import Canvas from './lib/Canvas';
import Boot from './lib/Boot';

class ECMABoy {
  constructor (Game, video) {
    this.video = video;
    this.game = new Game(this);
    this.boot = new Boot(this, {
      onComplete: this.game.start.bind(this.game)
    });
  }

  on () {
    this.boot.start();
  }
}

ECMABoy.Canvas = Canvas;

export default ECMABoy;
