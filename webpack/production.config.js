const config = require('./../webpack.config');
const webpack = require('webpack');

config.devtool = 'eval';

// Merge with existing plugins safely
config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false
  })
]);

module.exports = config;
