const path = require('path')
module.exports = {
    mode : 'production',
    entry: './src/index.js',
    // 在自己制作的包设置为 module 时,需要开启该配置,否则会报错
    // experiments:{
    //     outputModule:true,
    // },
    // output: {
    //     path:path.resolve(__dirname,'dist'),
    //     // 
    //     filename:'myLib.js',
    //     // 支持commonjs 的方式引入 const abc = require(".../"),该方式会让script的形式引入失效
    //     // node demo/app.js 使用nodejs 启动
    //     // library:{
    //     //     name : 'myLib',
    //     //     type : 'commonjs',
    //     // },

    //     // 设置模块类型为 esmodule,并且不需要设置name,同时需要配置 experiments 相关字段
    //     library:{
    //         // name : 'myLib',
    //         type : 'module',
    //     },
    // },

    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'myLib.js',
        // 设置自己制作的库支持,module,commonjs,script 三种方式的引入
        library:{
            name : 'myLib',
            type : 'umd',
        },
        // 该配置是必须的,否则会报self什么引用错误
        globalObject:'globalThis',
    }

}