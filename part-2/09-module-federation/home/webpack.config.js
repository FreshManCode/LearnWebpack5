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
                // 设置引入nav 这个模块的远程地址,此时在根据要引入的这个模块的webpack中的配置的key
                nav:'nav@http://localhost:3003/remoteEntry.js'
            },
            exposes:{

            },
            shared:{},
        }),
    ],
}