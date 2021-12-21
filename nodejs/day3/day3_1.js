//Importing function from files using require("path")
// const mathTable=require("./table");
//const si=require("./simpleIntrest");

//Importing object having two functions mathtable and si
const Table = require("./exportobjectwith2functin.js");

//Importing class
const cart=require("./exportclass");
const { getAll } = require("./exportclass");


console.log("Hello world from nodejs")

const add=function(first,second){
    return first + second;
}
const sub=function(first,second){
    return first - second;
}
const rem=(first,second)=>first%second
console.log(add(12,8)+" "+sub(20,8)+" "+rem(3,2));

//mathTable(5);
//console.log(`\nsimple intrest for a year for principle 1000: ${si(1000,5,1)}`)

Table.mathTable(5);
console.log(`\nsimple intrest for a year for principle 1000: ${Table.si(1000,5,1)}\n`);

//adding items to carts
cart.addToCart({'id':1,'name':"samsung m31",'price':13000});
cart.addToCart({'id':2,'name':"Mi",'price':10000});
cart.addToCart({'id':3,'name':"mi note 8",'price':12000});
cart.addToCart({'id':4,'name':"note4",'price':23000});

//fetching items
items=cart.getAll();

//displaying
items.forEach((element) => console.log(`${element.name} costs Rs.${element.price}`));

//delete item 2
cart.removeFromCart(2);

//displaying aftr remove
items=cart.getAll();
console.log("\n")
items.forEach((element) => console.log(`${element.name} costs Rs.${element.price}`));


console.log("\nend of script");
// setTimeout(console.clear,3000);
   