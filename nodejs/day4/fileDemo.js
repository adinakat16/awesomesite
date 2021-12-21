//---------------------------------------------------------------------------
//to work with files we need the fs module 

const fs = require('fs');
/*only for custom modules we use ./ for standard module use name directly,
refering to module*/

/*********reading file syncronously******/
//  const data = fs.readFileSync('./ex04.js', 'utf-8');
//  console.log(data);

//********reading file asyncronously*****/
// fs.readFile('./fileDemo.js', 'utf-8', function (err, data) {
//     if (err != null) {
//         console.error(err.message);
//     }
//     else {
//         console.log(data);
//     }
// })

//---------writing to file in JS--------
  const filename = './myfile.txt';
// fs.writeFile(filename, "This is content that i want to replace in the file", (err) => {
//     if (err != null){
//         console.log(err.message);
//     }
// })
// console.log("async call will not stop the app from continuing");

//--------appending contents of the file-------
fs.open(filename, 'a+', function (err, fd) {
    if (err != null) {
        console.log(err.message);
    }
    else {
        let content = "data in some format\n";
        fs.write(fd, content, (e, written, buffer)=>{
            fs.close(fd, () => {
                console.log("file writing is completed");
            })
        })
    }
})

//---------------------------------------------------------------------------
