module.exports = {
    plugins:[
        // 自动给样式添加厂商前缀
        require('autoprefixer'),
        // 样式嵌套
        require('postcss-nested')
    ]

}