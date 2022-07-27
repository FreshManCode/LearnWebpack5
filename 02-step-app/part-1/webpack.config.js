
const path = require('path')

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
    mode:'none'
}