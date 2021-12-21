//exporting using: module.exports = {mathTable:function1(){},si:function2(){}}
module.exports={
    mathTable:function (num){
    console.log(`\nTable for ${num} is: `);
    for(let i=1;i<=10;i++){
        console.log(`${num}x${i} = ${num*i}`);
    }
},
si:function(p,r,t){
    return (p*r*t)/100;
    }
}
