const app =require("express")();
const fs =require('fs');
const parser = require("body-parser");
const root=__dirname;//root directory store in root variable

//Adds the logic for the Express to process the body of the POSTED DATA from the web form. 
app.use(parser.urlencoded({extended:false}))//It is used if U want any specific format of body structure. 
//Data posted by the Form will be stored as body object into the request.  This will happen only if EXPRESS is using the body parser module. 

app.get('/',(req,res)=>res.send("testing express ap!1"));
app.get('/homepage',(req,res)=>res.sendFile(root+req.url+'.html'));
app.get('/registration',(req,res)=>res.sendFile(root+req.url+'.html'));
app.get('/aboutus',(req,res)=>res.sendFile(root+req.url+'.html'));
app.get('/contactus',(req,res)=>res.sendFile(root+req.url+'.html'));

app.listen(1234,()=>console.log("server is runing on port 1234"))