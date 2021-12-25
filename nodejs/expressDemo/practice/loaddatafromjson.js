var app = require('express')();
var fs = require('fs');
var url=require('url');
var root=__dirname

app.get('/e',(req,res)=>{
    res.sendFile(root+"/loaddatafromjson.html");
})
app.get('/emp',(req,res)=>{
    fs.readFile('empjson.json',(err,data)=>{
        res.send(JSON.parse(data));
    })

})
app.get('/empname',(req,res)=>{
    //creating url string based on recieved request
    var myurl="localhost:1234"+req.url;
    //convert in url and make query object
    var qdata=url.parse(myurl,true).query;
    //extract name parameter value
    var qdatatofind=qdata.name;
    //read source json file
    fs.readFile('empjson.json',(err,data)=>{
        //conver from json array string to json object array
        data=JSON.parse(data);
        // filter based on extracted parameter value
        data=data.filter((e)=>e.first_name.includes(qdatatofind));
        //send it back 
        res.send(data);
    })
})

app.listen(1234,()=>{
    console.log("server is running on 1234 port......")
})