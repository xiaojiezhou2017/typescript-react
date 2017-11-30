const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressWebpackPlugin = require('progress-webpack-plugin');

const { resolve, join } = require('path');
module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    output: {
        path: resolve('./dist'),
        filename: "[name].[hash].js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx$/, use: ["ts-loader"], include:[/src/] },
            { test: /\.(css|less)$/, use: 'style-loader!css-loader!less-loader', include: [/src/]},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new ProgressWebpackPlugin(true) 
    ],
    devtool: 'source-map',
    devServer: {
        overlay: true,
        port: 5000,
        open: true
    },
};