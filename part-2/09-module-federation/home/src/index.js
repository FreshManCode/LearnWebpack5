import HomeList from './HomeList'

// 模块联邦,引入外部的组件
// 注意引入的路径,取决于项目双方webpack 中的相关模块配置
// 由于网络引入有延迟,因此使用import 的异步函数导入方式
import('nav/Header').then((Header)=>{
    const body = document.createElement('div')
    body.appendChild(Header.default())
    document.body.appendChild(body)
    document.body.innerHTML += HomeList(5)

})

