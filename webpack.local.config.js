const path = require('path');
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let config = require('./webpack.base.config.js');

config.entry = [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    './frontend/index.js',
];

config.devtool = false;

config.cache = true;

config.output.publicPath = 'http://localhost:3030/frontend/bundles/';

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })
];

config.devServer = {
    inline: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3030,
    headers: { 'Access-Control-Allow-Origin': '*' }
};

config.optimization = {
    minimize: false,
    runtimeChunk: {
        name: 'vendor'
    },
    splitChunks: {
        cacheGroups: {
            default: false,
            commons: {
                test: /node_modules/,
                name: "vendor",
                chunks: "initial",
                minSize: 300
            }
        }
    }
};

module.exports = config;