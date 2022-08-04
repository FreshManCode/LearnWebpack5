const HtmlWebpckPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require('webpack').container
module.exports = {
    mode : 'production',
    entry: './src/index.js',
    plugins:[
        new HtmlWebpckPlugin(),
        // 使用模块联邦,引用远端组件功能
        new ModuleFederationPlugin({
            name:'home',
            filename:'remoteEntry.js',
            // 引入外部的远端组件,下面的配置取决于另个项目的模块联邦的到处相关配置
            remotes:{
                nav:'nav@http://localhost:3003/remoteEntry.js'
            },
            exposes:{

            },
            shared:{},
        }),
    ],
}