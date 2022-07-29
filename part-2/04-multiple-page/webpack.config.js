const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            // 配置title,在index.html中可以引用
            title:'多页面应用',
            template:'./index.html',
            inject:'body',
            // 设置打包时载入哪些chunk,就是entry里面定义的一些 ,在dist中的index.html中可以查看引用
            chunks:['main','main2','my_lodash'],
        }),
    ],
    // entry:['./src/app.js','./src/app2.js','lodash'],
    entry:{
        main:{
            import:['./src/app.js','./src/app2.js'],
            // 都依赖lodash,会把lodash 当做公共部分抽离出来
            dependOn:'my_lodash',
        },
        main2:{
            import:['./src/app3.js'],
            dependOn:'my_lodash',
        },
        // dependOn my_lodash 实际上是引用的是lodash起的别名为 my_lodash
        // lodash 单独打包,并给其打包文件起了一个别名 my_lodash
        my_lodash:'lodash',
    }
}