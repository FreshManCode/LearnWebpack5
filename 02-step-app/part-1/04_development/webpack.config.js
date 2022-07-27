
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 设置入口
    entry : './src/index.js',
    // 设置出口
    output:{
        filename:'bundle.js',
        // path设置的时候一定是绝对路径,否则会报错, ** path is nor an absolute path!
        // path.resolve(__dirname,'./dist') 在webpack.config.js 当前文件目录下,拼接一个dist文件夹
        path:path.resolve(__dirname,'./dist')
    },
    mode:'development',
    // 使用source-map, 方便排错,在出现错误时,浏览器控制台上能看到未被hash处理的js文件
    devtool:'inline-source-map',

    // 配置插件
    plugins:[
        new HtmlwebpackPlugin({
            template:'./index.html',
            filename:'app.html',
            // 以index.html 为模板基础,生成的文件名是app.html,同时把打包生成的js引入路径,
            // 不放入head中,放到body中,可以观察dist中,app.html和index.html的区别
            inject:'body'
        })
    ]
}