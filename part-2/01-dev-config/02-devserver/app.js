// console.log('hello world');
// 未使用代理之前,会报跨域请求问题
// 在webpack.config.js 中配置了代理之后,可以进行跨域请求
fetch('/api/hello')
.then(res=>res.text())
.then(res=>{
    console.log('res is:',res);
})

function createDiv() {
    const div = document.createElement('div')
    div.innerText = 'div_div'
    document.body.appendChild(div)
}
createDiv();