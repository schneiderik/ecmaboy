import throttle from 'lodash.throttle';

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
    this.run = throttle(() => {
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

export default Animation;
