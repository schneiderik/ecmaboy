var path = require('path');

module.exports = {
  entry: './demo/assets/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'demo')
  },
	module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
