const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({ filename: 'style.css', allChunks: true });

var sourceMap = '';
if (process.env.NODE_ENV !== 'production') {
  sourceMap = '#inline-source-map';
}

module.exports = [
  // JS
  {
    context: `${__dirname}/src`,
    entry: {
      background: './chrome/background',
      browser_action: './chrome/browser_action',
      inject: './chrome/inject',
      options: './option',
    },
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].js',
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        Tether: 'tether',
      }),
      new webpack.DefinePlugin({ ENV: JSON.stringify(process.env.NODE_ENV) })
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
      extensions: ['.js', '.jsx'],
    },
    devtool: sourceMap,
  },


  // SCSS
  {
    context: `${__dirname}/src`,
    entry: {
      style: './chrome/static/style/index.js',
    },
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        }
      ],
    },
    plugins: [
      extractSass,
      new CopyWebpackPlugin([
        { from: 'chrome/static/html' },
      ]),
    ],
  },
];
