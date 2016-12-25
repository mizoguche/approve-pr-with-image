module.exports = {
    context: __dirname + '/src',
    entry: {
        'background': './bg/background.js',
        'browser_action': './browser_action/browser_action.js',
        'core': './core/core.js',
        'inject': './inject/inject.js',
        'options': './options/index.js'
    },
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
