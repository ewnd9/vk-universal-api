var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: __dirname + '/index.js'
  },
  output: {
    filename: '[name].webpack.bundle.js',
    path: __dirname + '/bundles'
  },
  resolve: {
    root: [
      path.join(__dirname, '/../../node_modules'),
    ],
    moduleDirectories: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
};
