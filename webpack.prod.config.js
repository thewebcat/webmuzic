const path = require('path');
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let config = require('./webpack.base.config.js');

config.entry = [
    'babel-polyfill',
    './frontend/index.js'
];

config.output.path = path.join(__dirname, 'frontend/dist');

config.plugins = [
    new BundleTracker({filename: './webpack-stats-prod.json'}),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),

];

config.optimization = {
    minimize: true,
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