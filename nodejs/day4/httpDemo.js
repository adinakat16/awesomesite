const http=require("http");


const server=http.createServer((req,res)=>{
    if(req.url != 'favicon.ico'){
        res.write("<h1>Welcome to server programming</h1>");
        res.write("<hr/>");
        res.end();
    }
    console.log(req.url)
})
server.listen(1234)