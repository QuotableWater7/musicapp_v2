var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../app/assets/javascripts');
var APP_DIR = path.resolve(__dirname + '/app');

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loader: 'babel', include: APP_DIR }
    ]
  }
};
