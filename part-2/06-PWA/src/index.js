console.log('hello webpack1_1_1');
console.log('tests');
// 判断浏览器是否支持 serverWorker 
if ('serviceWorker' in navigator) {
    console.log('serviceWorker 支持');
    window.addEventListener('load',()=>{
        console.log('资源加载了哈哈');
        navigator.serviceWorker.register('/service-worker.js')
        .then(registration=>{
            console.log('SW 注册成功',registration)
        })
        .catch(registrationError=>{
            console.log('SW 注册失败',registrationError)
        })

    })
} else {
    console.log('浏览器不支持serviceWorker');
}