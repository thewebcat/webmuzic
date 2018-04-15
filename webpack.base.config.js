const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
        modules: ["node_modules", "bower_components"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.s[a|c]ss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader:'css-loader',
                            query: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: true,
                                includePaths: [path.join(__dirname, "node_modules"), path.join(__dirname, "bower_components")]
                            }
                        }
                    ]
                }))
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        //publicPath: 'fonts/'       // override the default path
                    }
                }]
            }
        ]
    },
};