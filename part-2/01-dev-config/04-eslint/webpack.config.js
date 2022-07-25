const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    mode : 'development',

    entry:'./src/app.js',

    devServer: {
        client:{
            overlay:true,
        }

    },

    module:{
       rules:[
        //    {
        //     test : /\.js$/,
        //     use : ['babel-loader','eslint-loader'],
        //    }
       ]
    },
    plugins:[
        new HtmlWebpackPlugin(),
        new ESLintPlugin({
            // 自动修复
            fix:true,
        }),
    ]
}