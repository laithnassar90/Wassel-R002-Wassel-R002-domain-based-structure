const path = require('path');
const webpack = require('webpack');

// Base config
const config = {
  mode: 'production',
  entry: './src/index.js', // adjust if your main entry is different
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  devtool: 'eval', // you can switch to 'source-map' for production
  module: {
    rules: [
      // JS/JSX
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;
