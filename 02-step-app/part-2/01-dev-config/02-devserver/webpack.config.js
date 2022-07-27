const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode :'development',

    entry:'./app.js',

    output:{
        publicPath:'/'
    },

    devServer:{
        static:path.resolve(__dirname,'./dist'),
        // 允许以gzip形式传输
        compress:true,
        // 设置端口号
        port:3000,
        // 允许非本主机通过ip访问本地启动的服务器
        host:'0.0.0.0',
        headers:{
            'x-Access-Token':"123123",
        },
        // 配置代理
        proxy:{
            // 当访问/api 相关的接口请求时,把接口转发到http://localhost:9000 这个地址上进行请求
            '/api':'http://localhost:9000',
        },
        // 使用https协议访问本地项目,注释之后就是http协议
        // https:true,

        // 也是开启https协议
        // http2:true,

        // 当访问的页面路由不存在时,访问根页面
        historyApiFallback:true,
    },

    plugins:[
        new HtmlWebpackPlugin(),
    ]
}