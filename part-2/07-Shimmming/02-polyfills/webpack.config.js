module.exports = {
    mode : "development",
    entry:'./src/index.js',
    module:{
        rules:[
            {
                // 优化Polyfills
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env',{
                                targets:[
                                    'last 1 version',
                                    '> 1%'
                                ],
                                useBuiltIns:'usage',
                                corejs:3,
                            }]
                        ]
                    }
                }
            }
        ]
    }
}