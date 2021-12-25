var app = require('express')();
var fs = require('fs');
var url=require('url');
var root=__dirname

app.get('/e',(req,res)=>{
    res.sendFile(root+"/loaddatafromjson.html");
})
app.get('/emp',(req,res)=>{
    fs.readFile('empjson.json',(err,data)=>{
        //console.table(JSON.parse(data));
        res.send(data);
    })

})
app.get('/empname',(req,res)=>{
    
    var myurl="localhost:1234"+req.url;
    //console.log(myurl)
    var qdata=url.parse(myurl,true).query;
    //console.log(qdata.name)
    var qdatatofind=qdata.name;
    fs.readFile('empjson.json',(err,data)=>{
        data=JSON.parse(data);
        data=data.filter((e)=>e.first_name.includes(qdatatofind));
         console.log(data);
        res.send(data);
    })
})

app.listen(1234,()=>{
    console.log("server is running on 1234 port......")
})