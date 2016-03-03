var path = require('path');
var webpack = webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:9191/',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src/entry.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build-not-working'),
    filename: '[name]_bundle.js'
  },
  devServer: {
    contentBase: 'build-not-working/'
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;