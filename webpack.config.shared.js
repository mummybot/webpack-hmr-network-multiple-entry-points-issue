var ExtractTextPlugin = require('extract-text-webpack-plugin');
var configShared = {
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;