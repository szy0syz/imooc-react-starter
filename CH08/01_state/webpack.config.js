var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './js/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/, // 正则以.js后缀结尾
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};