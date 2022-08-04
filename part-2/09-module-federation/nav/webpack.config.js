const HtmlWebpackPlugin = require('html-webpack-plugin')
// 使用webpack5 内置的模块联邦功能
const {ModuleFederationPlugin} = require('webpack').container
module.exports = {
    entry :"./src/index.js",
    mode :"production",
    plugins:[
        new HtmlWebpackPlugin(),
        // 模块联邦相关参数配置
        new ModuleFederationPlugin({
            name:'nav',
            filename:'remoteEntry.js',
            remotes:{},
            // 要保留处组件,给别的用
            exposes:{
                './Header':'./src/Header.js',
            },
            shared:{

            },
        })
    ]
}