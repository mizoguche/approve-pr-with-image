var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    background: './bg/background',
    browser_action: './browser_action/browser_action',
    inject: './inject/inject',
    options: './option',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'static' }]),
    new CopyWebpackPlugin([{ from: '../node_modules/material-design-lite/material.min.css' }]),
    new CopyWebpackPlugin([{ from: '../node_modules/material-design-lite/material.min.js' }]),
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
};
