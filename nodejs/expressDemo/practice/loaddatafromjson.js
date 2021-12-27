var app = require('express')();
var fs = require('fs');
var url = require('url');
var root = __dirname

app.get('/e', (req, res) => {
    res.sendFile(root + "/loaddatafromjson.html");
})
app.get('/emp', (req, res) => {
    fs.readFile('empjson.json', (err, data) => {
        res.send(JSON.parse(data));
    })

})
app.get('/empname', (req, res) => {
    //creating url string based on recieved request
    var myurl = "localhost:1234" + req.url;
    //convert in url and make query object
    var qdata = url.parse(myurl, true).query;
    //extract name parameter value
    var qdatatofind = qdata.name;
    //read source json file
    fs.readFile('empjson.json', (err, data) => {
        //conver from json array string to json object array
        data = JSON.parse(data);
        // filter based on extracted parameter value
        data = data.filter((e) => e.first_name.includes(qdatatofind));
        //send it back 
        res.send(data);
    })
})

app.get('/update', function (req, res) {
    let entryindex;
    let updateddata= new Object();
    var myurl = "localhost:1234" + req.url;
    var qdata = url.parse(myurl, true).query;
    // updateddata= fs.readFileSync('empjson.json', (err, data) => {
    //     //convert from json array string to json object array
    //     data = JSON.parse(data);
    //     entryindex=data.findIndex((e)=>{return e.id == qdata.id})
    //     var newentry=data.find((e)=>{return e.id == qdata.id})
    //     newentry=qdata;
    //     data[entryindex]=newentry
    //     return data;
    //    // updateddata=JSON.parse(JSON.stringify(data));
    //     console.log("its ended") 
    // })
    updateddata=fs.readFileSync('empjson.json',{encoding:'utf8', flag:'r'})
    updateddata= JSON.parse(updateddata);

    //find index of matching name
    entryindex=updateddata.findIndex((e)=>{return e.id == qdata.id})

    //get sent object
    var newentry=qdata;
    //update index entry into table
    updateddata[entryindex]=newentry;
    //rewrite the json file
    fs.writeFile('empjson.json',JSON.stringify(updateddata),function(){})
    res.end();
})
app.listen(1234, (req, res) => {
    console.log("server is running on 1234 port......")
})