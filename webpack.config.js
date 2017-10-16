import path from 'path'

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    target: 'web',
    cache: false,
    debug: false,
    devtool: false,

    entry: [
        path.join(__dirname, 'app/index.js')
    ],

    output: {
        path: path.join(__dirname, 'public'),
        publicPath: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],

        exprContextCritical: false
    },

    plugins: [
        HTMLWebpackPluginConfig
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ],

    resolve: {
        modulesDirectories: [
            'node_modules'
        ],
        extensions: ['', '.js', '.json']
    },

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
};
