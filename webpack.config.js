var path = require('path');

module.exports = {
  entry: './demo/assets/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'demo')
  }
};
