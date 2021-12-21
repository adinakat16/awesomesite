//to work with files we need the fs module 

const fs=require('fs');
/*only for custom modules we use ./ for standard module use name directly,
refering to module*/

/*********reading file syncronously******/
 const data = fs.readFileSync('./ex04.js','utf-8');
 console.log(data);