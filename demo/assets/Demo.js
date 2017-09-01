import constants from './../../lib/constants';
import utils from './utils';

class Demo {
  constructor (system) {
    this.system = system;
  }

  start () {
		this.render();
  }

	update () {
	}

  render () {
    this.canvas = utils.canvas.create();
    this.context = utils.canvas.getContext(this.canvas);

    this.context.fillStyle = `rgb(192, 192, 192)`;
    this.context.fillRect(0, 0, constants.screen.width, constants.screen.height);
	
    this.system.video.render(utils.canvas.getImageData(this.context).data);
  }
}

export default Demo;
