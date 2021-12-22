//Nodejs is used to create nodejs Application and host it

const http=require('http');
const fs= require('fs');

http.createServer((req,res)=>{
console.log(req);
}).listen(1234)