// 使用node.js 模拟本地一个接口请求
const http = require("http")
const app = http.createServer((req,res)=>{
    console.log('req.url is:',req.url);
    if (req.url === '/api/hello') {
        res.end('hello world')
    }
})
app.listen(9000,'localhost',()=>{
    console.log('locahost:9000 start');
})