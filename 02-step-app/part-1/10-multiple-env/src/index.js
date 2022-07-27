import hellWorld  from './hello-world.js'
import  './async-module.js'
import img_src from './asset/error.png'
import _ from 'lodash'
import './style/style.css'
import './style/style.less'

console.log(_.join(['Index','module','loaded!'],' '));


const img = document.createElement('img')
img.src = img_src
document.body.appendChild(img)

hellWorld();

const button = document.createElement('button')
button.textContent = '点击执行加法运算'
// 懒加载
button.addEventListener('click',function(){
    //动态导入  懒加载导入模块方式,用到该模块的时候才引入,提升加载速度
    // /* webpackChunkName:'math' */使用了魔法注释,把打包生成的文件名改为math****,后面取决于webpack配置中的filename
    // webpackPrefetch:true 预加载,在加载完成所需的资源模块时,此时网络空闲的时候,来进行相关资源的预加载
    import(/*webpackChunkName:'math',webpackPrefetch:true*/'./math.js').then(({add})=>{
        console.log(add(4,5))
    })
})
document.body.appendChild(button)