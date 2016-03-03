var path = require('path');
var webpack = webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:9090/',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/entry.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build/'
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