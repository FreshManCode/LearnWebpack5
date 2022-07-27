const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : 'development',
    entry:'./app.js',
    plugins:[
        new HtmlWebpackPlugin({
            // template:"./index.html"
        }),
    ],
    // 设置外部第三方的引入类型,为script,否则会报unexpected token....相关之类的错误
    externalsType:'script',
    // 定义外部第三方的包
    externals:{
        // 引入外部jquery 并设置引入别名$
        jquery:['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js','$']
    }


}