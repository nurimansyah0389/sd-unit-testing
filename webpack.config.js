const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/bootstrap.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bootstrap.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [/src\/main/],
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                include: [/src/],
                exclude: [/node_modules/],
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};