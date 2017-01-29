var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        'background': './bg/background.js',
        'browser_action': './browser_action/browser_action.js',
        'inject': './inject/inject.js',
        'options': './options/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'static'}]),
        new CopyWebpackPlugin([{from: '../node_modules/material-design-lite/material.min.css'}]),
        new CopyWebpackPlugin([{from: '../node_modules/material-design-lite/material.min.js'}]),
        new CopyWebpackPlugin([{from: '../node_modules/jquery/dist/jquery.min.js'}])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015'],
                    "plugins": ["transform-flow-strip-types"]
                }
            }
        ]
    }
};
