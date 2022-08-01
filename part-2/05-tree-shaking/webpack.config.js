const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'production',
    entry:'./src/app.js',
    devtool:'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin(),
    ],

    // package.json sideEffects 中的字段设置是否有副作用,设置为false,认为没有副作用,webpack 打包的时候会把一些
    // 认为无用的js/css 给删掉优化掉
    optimization:{
        // tree-shaking
        // 如果启用该配置,则会对js做相关优化,会把无用的代码自动过滤掉,像math.js中的两个方法,只有一个方法使用,
        // 未开启该选项之前,都会打包进js,开启之后,则另个未使用的方法呗过滤掉了
        usedExports:true,
    },
    // 设置loader 解析模块
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]

    }
}