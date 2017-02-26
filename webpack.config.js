const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var sourceMap = '';
if (process.env.NODE_ENV !== 'production') {
  sourceMap = '#inline-source-map';
}

module.exports = {
  context: __dirname + '/src',
  entry: {
    background: './chrome/background',
    browser_action: './chrome/browser_action',
    inject: './chrome/inject',
    options: './option',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'chrome/static' }]),
    new CopyWebpackPlugin([{ from: '../node_modules/bootstrap/dist/css/bootstrap.min.css' }]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-flow-strip-types'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: sourceMap,
};
