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
    module:{
        rules:[
            // 配置好该相关插件之后,index 中的this 指向就是window了
            {
                test:require.resolve('./src/index.js'),
                use:'imports-loader?wrapper=window'
            },
            // 全局exports
            {
                test:require.resolve('./src/global.js'),
                // 以commonsjs 模块导出的方法,导出一个名为file 的变量
                use:'exports-loader?type=commonjs&exports=file,multiple|helper.parse|parse'
            }
        ],
    }

}