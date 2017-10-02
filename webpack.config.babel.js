import path from 'path';
import webpack from 'webpack';

/* eslint camelcase: 'off' */

import path from 'path';
import webpack from 'webpack';

const getConfig() => {
    return {
        devtool: 'source-map',

        entry: [
            path.join(__dirname, 'app/index.js')
        ],

        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'app'),
                    loaders: ['babel-loader']
                }
            ]
        },

        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    unused: true,
                    dead_code: true,
                    warnings: true,
                    screw_ie8: true
                },
                compressor: {
                    warnings: false
                },
                minimize: true,
                sourceMap: true
            })
        ]
    };
}

export default getConfig();
