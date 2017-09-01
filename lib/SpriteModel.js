const defaultAttributes = {
  activeFrame: 1
};

class SpriteModel {
  constructor(attributes) {
    this.attributes = Object.assign({}, defaultAttributes, attributes);
  }

  get(attr) {
    return this.attributes[attr];
  }

  set(attr, value) {
    this.attributes[attr] = value;

    return value;
  }

  transform(options={}) {
    const currentOffsetY = this.get('offsetY');
    const currentOffsetX = this.get('offsetX');

    if (options.translateY) {
      this.set('offsetY', currentOffsetY + options.translateY);
    }

    if (options.translateX) {
      this.set('offsetX', currentOffsetX + options.translateX);
    }
  }

  getActiveFrame() {
    return this.getFrame(this.get('activeFrame'));
  }

  getFrameSourceOffsetX(frame) {
    let offsetX = this.get('sourceOffsetX');
    let index = frame - 1;

    if (this.get('frameDirection') === 'left') {
      offsetX = offsetX - (index * this.get('width'));
    }

    if (this.get('frameDirection') === 'right') {
      offsetX = offsetX + (index * this.get('width'));
    }

    return offsetX;
  }

  getFrameSourceOffsetY(frame) {
    let offsetY = this.get('sourceOffsetY');
    let index = frame - 1;

    if (this.get('frameDirection') === 'up') {
      offsetY = offsetY - (index * this.get('height'));
    }

    if (this.get('frameDirection') === 'down') {
      offsetY = offsetY + (index * this.get('height'));
    }

    return offsetY;
  }

  getFrame(frame) {
    return [
      this.get('source'),
      this.getFrameSourceOffsetX(frame),
      this.getFrameSourceOffsetY(frame),
      this.get('width'),
      this.get('height'),
      this.get('offsetX'), 
      this.get('offsetY'),
      this.get('width'),
      this.get('height')
    ]
  }
}

export default SpriteModel;
