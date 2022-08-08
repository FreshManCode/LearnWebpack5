module.exports = {
    mode : 'development',
    entry:'./src/index.js',

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    },
                    // thread-loader 有性能开销,可以处理比较耗时的loader,可以开启多个线程
                    {
                        loader:'thread-loader',
                        options:{
                            workes:2,
                        }
                    }
                ]
            }
        ]
    },
    optimization:{
        removeAvailableModules:false,
        removeEmptyChunks:false,
        splitChunks:false,
    },




}