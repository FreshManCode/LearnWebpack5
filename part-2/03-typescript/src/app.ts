import _  from 'lodash'
// 在ts中引入lodash模块,会报错
// 需要去 https://www.typescriptlang.org 网站中安装ts 语法的组件模块
// ts 代码
const age : number = 18
console.log('age:',age);
console.log(_.join([]));

