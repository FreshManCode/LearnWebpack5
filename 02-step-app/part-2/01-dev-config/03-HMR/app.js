import './style.css'
import './input.js'

const button = document.createElement('button')
button.textContent = '添加'
button.addEventListener('click',function() {
    const div = document.createElement('div')
    div.classList.add('square')
    document.body.appendChild(div)
})
document.body.appendChild(button)

// 如果不添加此判断,css模块可以实现热替换,但是自己写的js模块无法实现热替换,因此需要做如下配置,让自己写的js模块也可以实现热替换
if (module.hot) {
    // 实现热替换
    module.hot.accept('./input.js',()=>{

    })
}