const HtmlWebpackPlugin = require('html-webpack-plugin')
const workBoxPlugin = require('workbox-webpack-plugin')
module.exports = {
    mode : 'development',
    entry: './src/index.js',
    plugins:[
        new HtmlWebpackPlugin(),
        // PWA 离线环境下也可以加载运行
        new workBoxPlugin.GenerateSW({
            clientsClaim:true,
            skipWaiting:true,
        })
    ],
    devServer:{
        // 开发时编写的代码会生成到磁盘中保存一份,也就是会同步到dist中
        devMiddleware:{
            writeToDisk:true,
        }
    },
    output:{
        clean:true,
    },

}