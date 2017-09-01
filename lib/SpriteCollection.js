import SpriteModel from './SpriteModel';

class SpriteCollection {
  constructor(attributeArray) {
    this.models = [];

    if (attributeArray) {
      attributeArray.forEach(attributes => {
        this.add(attributes)
      });
    }
  }

  add(attributes) {
    this.models.push(new SpriteModel(attributes));
  }

  get(id) {
    return this.models.find(m => m.get('id') === id);
  }

  filter(func) {
    return this.models.filter(func);
  }

  getVisible() {
    return this.filter(m => m.get('visible'));
  }
}

export default SpriteCollection;
