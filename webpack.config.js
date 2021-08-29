const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //多管道动态打包
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.jsx',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.tpl.html'
        })
    ],
    devtool: 'inline-source-map', //设置映射回原始源代码的方式  有助于调试
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        //静态资源打包，正则匹配
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, 'src'),
            },
        ]
    },
    devServer: {
        port: 8080,
        host: '127.0.0.1',
    },
}