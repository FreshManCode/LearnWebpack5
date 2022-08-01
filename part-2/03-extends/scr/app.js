// 开启了CSS模块化之后,因为css 的设置的clssname 会被hash,因此需要模块化的引入方式
// import './app.css'
import style from './app.css'
console.log('style:',style);

const div = document.createElement('div')
div.textContent = 'Hello psotcss'
div.classList.add(style.box)
document.body.appendChild(div)