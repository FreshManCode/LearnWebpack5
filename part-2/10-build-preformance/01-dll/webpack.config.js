const HtmlWebpckPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
const path = require("path")
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')


module.exports = {
    mode :'production',
    entry:'./src/index.js',
    plugins:[
        new HtmlWebpckPlugin(),
        new webpack.DllReferencePlugin({
            // 该路径与webpack.dll.config.js 中配置的out 路径是相对应的
            manifest:path.resolve(__dirname,'./dll/manifest.json')
        }),
        // 把jquery 以dll方式动态打包,完成编译优化之后,通过该插件引入jquery
        new AddAssetHtmlPlugin({
            filepath:path.resolve(__dirname,'./dll/jquery.js'),
            publicPath:'./'
        })
    ]
}