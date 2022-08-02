// import '@babel/polyfill'
// polyfill 会把代码进行转化,有些浏览器不支持es6的写法,使用polyfill 会对浏览器支持的代码进行兼容

// 当进行polyfill 优化之后,就不需要手动import '@babel/polyfill'
// 安装了相关的插件
// 在webpack.config.js 中进行了相关的配置

console.log(Array.from([1,2,3,4],x=>x + x));