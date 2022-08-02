
// console.log(_.join(['heLlo','webpack'],' '));
// 注意:当没在webpack.config.js 中配置相关解析插件时,this 指向的是当前这个commonjs 模块本身,因此调用挂载在window上的
// alert方法就会报错,需要在配置中修改相关参数配置
// this.alert('Hello webpack')


// 全局导出函数,global 假设是外部文件的导出方式,参考webpack.config.js
const {file,parse } = require('./global')
console.log('file:',file);
parse();