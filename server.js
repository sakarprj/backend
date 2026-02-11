const http=require('http');
const app = require('./src/express');
const server=http.createServer(app)
server.listen(3000,'127.0.0.1',(err)=>{
    if(!err){
        console.log('server is running')
    }
})