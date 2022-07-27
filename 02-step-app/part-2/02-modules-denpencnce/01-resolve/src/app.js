// 使用模块路径
import _ from 'lodash'

// 使用绝对路径
import Header from '/src/components/Header.js'

// 使用相对路径
const math = require("./math")
// 在webpack中未配置 extensions 中的数组时,调用的是js,配置之后,因为数组中的调用顺序,所以优先调用了math.json文件,此时math 是个json文件

// webpack 支持该三种路径打包

// import Body from './components/a/b'


// console.log(math.add(5,6));
console.log(math);
console.log(_.join(['hello','webpack'],' '));
console.log(Header());
// Body();