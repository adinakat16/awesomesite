const util = require("util")//used for string based operation in your apps.
const os= require("os");//module for getting info about our OS..

const name = "aditya nakat";
const address = "Godbole Plots,AKola"
const Age=24;

const msg = util.format("my name is %s and my age is %d",name,Age);
console.log(msg);
/////////////////////OS/////////////////////
console.log("the machnine name : "+os.hostname())
console.log("the os type : "+os.type())
console.log("the os version : "+os.version())
console.log("the os network interfaces : "+os.networkInterfaces())
console.log("the os homedir : "+os.homedir())
console.log("the uptime : "+(os.uptime())/3600+"hrs")
console.log("the machine has cpus : "+os.cpus().length)
console.log("the total memeory : "+(os.totalmem())/1024000000)



///////////////////table////////////////////
var fakedata=require("./MOCK_DATA.json");
//console.table(fakedata);