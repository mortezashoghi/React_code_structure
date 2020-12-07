const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './client');
const destinationPath = path.join(__dirname, './dist');

module.exports = {
    context: sourcePath,
    devtool: "eval",
    entry: [
        //'./index.jsx'
        //bundle the client for hot reloading and connect to the provided endpoint
        "webpack-dev-server/client?http://localhost:3030",
        //bundle for hot reloading
        "webpack/hot/only-dev-server",
        // active hot reload for react
        "react-hot-loader/patch",
        "./index.jsx"
    ],
    output: {
        filename: 'bundle.js',
        path: destinationPath,
        //for hot module replacement add bellow
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ],
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                // exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ],
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ],
    },

    // For Hot replacementadd brlow
    plugins: [

        //for log
        new webpack.NamedModulesPlugin(),
        //for detect changes
        new webpack.HotModuleReplacementPlugin(),
    ],
    // For Use Dev server this config save output file in memory
    devServer: {
        contentBase: './',
        port: 3030,
        hot: true,
        //same above public path for hot module replacement
        publicPath: '/',
        historyApiFallback: true,
    }
};