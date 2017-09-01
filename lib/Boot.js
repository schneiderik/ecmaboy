import Sandbox from './Sandbox';
import bootSpriteAttributes from './boot-sprite-attributes';
import SpriteCollection from './SpriteCollection';
import Animation from './Animation';
import constants from './constants';

class Boot {
  constructor (system, options={}) {
    this.system = system;
    this.onComplete = options.onComplete;
    this.sandbox = new Sandbox(constants.screen.width, constants.screen.height);
    this.spriteCollection = new SpriteCollection(bootSpriteAttributes);
    this.shineAnimation = new Animation(this.spriteCollection.get('shine'), {
      throttle: 32,
      onLoopStart: sprite => sprite.set('visible', true),
      onFrameChange: sprite => sprite.transform({translateX: 6}),
      onLoopEnd: sprite => sprite.set('visible', false)
    });
    this.pingAnimation = new Animation(this.spriteCollection.get('ping'), {
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

export default Boot;
