function getComponent() {
    // import 之后动态chouli  lodash 文件
   return import ('lodash').then(({default:_})=>{
        const element = document.createElement('div')
        element.innerHTML = _.join(['Hello','webpack'], " ")
        return element
    })
}
getComponent().then((element)=>{
    document.body.appendChild(element)
})
