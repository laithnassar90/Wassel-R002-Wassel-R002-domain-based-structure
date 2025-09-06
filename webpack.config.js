var webpack = require('webpack');
var path = require('path');
require('es6-promise').polyfill();

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'], // stage-1 included in stage-0
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  }
};
