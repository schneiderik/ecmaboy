import constants from './../../lib/constants';

export default {
  canvas: {
    create: () => {
      const canvas = document.createElement('canvas')

      canvas.setAttribute('height', constants.screen.height);
      canvas.setAttribute('width', constants.screen.width);

      return canvas;
    },
    getContext: (canvas) => {
      return canvas.getContext('2d');
    },
    getImageData: (context) => {
      return context.getImageData(
        0,
        0,
        constants.screen.width,
        constants.screen.height
      );
    }
  }
};
