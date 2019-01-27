
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

console.log(combineLoaders([{
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  }]))

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  module: {
    rules: [{
        // JS loader config
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]--[hash:base64:5]',
            }
          },
        ]})
      }],
  }
};
