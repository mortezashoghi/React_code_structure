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
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, ],
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './',
        port: 3030,
        hot: true,
        publicPath: '/',
    }
};