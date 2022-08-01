const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./scr/app.js',
    plugins:[
        new HtmlWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/.css$/,
                // postcss 使用
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],

                use:[
                    'style-loader',
                    // 开启了css 模块化设置
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                        }
                    },
                    'postcss-loader',
                ],
                
                
            }
        ]
    }


}