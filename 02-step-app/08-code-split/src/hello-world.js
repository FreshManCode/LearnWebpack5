function getString() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Hello,world!!!')
        }, 2000);

    })
}
async function helloWorld() {
    // await 必须指定当前函数是异步函数,所以函数声明前加async 关键字
    let string = await getString()
    console.log(string);

}

export default helloWorld;