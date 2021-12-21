//exporting using: module.exports = function(){}
module.exports=function (num){
    console.log(`\nTable for ${num} is: `);
    for(let i=1;i<=10;i++){
        console.log(`${num}x${i} = ${num*i}`);
    }
}
