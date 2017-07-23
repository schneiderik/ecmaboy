import constants from './constants';
import utils from './utils';

class Boot {
  constructor () {
		this.state = {
			value: 50
		}
  }

	update () {
		this.state = {
			value: (Math.random() >= 0.5) ? this.increaseValue() : this.decreaseValue()
		}
	}

	increaseValue () {
    return this.state.value !== 255 ? (this.state.value + 1) : this.state.value;
	}

	decreaseValue () {
    return this.state.value !== 0 ? (this.state.value - 1) : this.state.value;
	}

  render () {
    const canvas = utils.canvas.create();
    const context = utils.canvas.getContext(canvas);

    context.fillStyle = `rgba(${this.state.value}, ${this.state.value}, ${this.state.value}, 1)`;
    context.fillRect(0, 0, constants.screen.width, constants.screen.height);

    return canvas;
  }
}

export default Boot;
