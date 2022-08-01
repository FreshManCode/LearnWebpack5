const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode : 'development',
    entry:'./src/app.ts',
    devtool:'inline-source-map',
    module:{
        rules:[
            // 配置解析ts loader
            {
                test:/\.ts$/,
                use:'ts-loader',
                // node_modules 里面的不需要使用该loader
                exclude:/node_modules/,
            }
        ]
    },
    // 设置解析的优先级 .ts -> .js
    resolve:{
        extensions:['.ts','.js']
    },
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
    },
    plugins:[
        new HtmlWebpackPlugin(),
    ]
    
}