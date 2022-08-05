// 模块联邦 使用nav 以及 home 的组件
Promise.all([import('nav/Header'),import('home/HomeList')])
.then(([
    {default:Header},
    {default:HomeList}
])=>{
    document.body.appendChild(Header())
    document.body.innerHTML += HomeList(5)

    
})

// import('nav/Header').then((Header)=>{
//     const body = document.createElement('div')
//     const headerTitle = document.createElement('h2')
//     headerTitle.innerText = "search"
//     body.appendChild(Header.default())
//     body.appendChild(headerTitle)
//     document.body.appendChild(body)
// })
