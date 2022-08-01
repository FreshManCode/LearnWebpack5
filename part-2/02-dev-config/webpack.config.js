const path = require('path')
module.exports = {
    entry :'./src/app.js',

    mode:'development',

    // 使用resolve 中的  alias 给某些路径配置别名,简化搜索路径
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src')
        },
        // 配置webpack中的文件调用顺序
        extensions:[
            '.json',
            '.js',
            '.vue'
        ]
    }
}