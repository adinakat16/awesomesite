const express = require('express');
const app=express(); //instance of express module
const root=__dirname;//root directory store in root variable

app.get('/',(req,res)=>res.send("testing express ap!1"));
app.get('/homepage',(req,res)=>res.sendFile(root+req.url+'.html'));
app.get('/registration',(req,res)=>res.sendFile(root+req.url+'.html'));
app.get('/aboutus',(req,res)=>res.sendFile(root+req.url+'.html'));
app.get('/contactus',(req,res)=>res.sendFile(root+req.url+'.html'));

app.listen(1234,()=>console.log("server is runing on port 1234"))