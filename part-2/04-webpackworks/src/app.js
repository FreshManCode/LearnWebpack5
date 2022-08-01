console.log('app.js');
const worker = new Worker( new URL('./work.js',import.meta.url));
worker.postMessage({
    question:'hi,work 测试'
})
worker.onmessage= (message)=>{
    console.log('message:',message,'data:',message.data);
}