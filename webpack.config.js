const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // change to 'production' for prod
  entry: './src/index.js', // adjust if main file is different
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      // JS / JSX
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              ['@babel/plugin-proposal-decorators', { legacy: true }]
            ]
          }
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // SCSS / SASS
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Assets (fonts/images)
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: JSON.stringify(true),
      __DEVTOOLS__: JSON.stringify(false)
    })
  ],
  devtool: 'eval-source-map'
};
