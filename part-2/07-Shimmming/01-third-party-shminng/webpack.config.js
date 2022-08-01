const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode : 'development',
    entry: './src/index.js',
    plugins:[
       new HtmlWebpackPlugin(),
        //    Shimmming 预置全局变量
        //    把lodash 定义为全局变量
       new webpack.ProvidePlugin({
           _:'lodash',
       })
    ],

}