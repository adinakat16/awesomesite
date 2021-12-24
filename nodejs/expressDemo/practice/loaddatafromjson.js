var app = require('express')();
var fs = require('fs');
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
    fs.readFile('empjson.json',(err,data)=>{
        res.send(data.find({"first_name": name}));
    })
})

app.listen(1234,()=>{
    console.log("server is running on 1234 port......")
})