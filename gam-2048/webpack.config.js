/**
 * Created by dev on 2016/4/1.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './enter.js',
    output: { path: __dirname, filename: 'dist/app.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};