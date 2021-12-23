var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //writing means replace content or creating if not exist
        fs.writeFile('sample.txt', 'this is my newly created sample text file', function (err) {
            if (err) throw err;
            console.log('file created');
        })

        //aapend file
        setTimeout(() => {
            fs.appendFile('sample.txt', 'appended \n', function (err) {
                if (err) throw err;
                console.log('appended');
            })
        }, 2000);

        //rename file
        setTimeout(()=>{
            fs.rename('sample.txt','rename.txt',function(err){
                if (err) throw err;
            });
        },2000)

        //delete file
        setTimeout(() => {
            fs.unlink('rename.txt', function (err) {
                if (err) throw err;
                console.log('deleted\n');
            })
        }, 3000)
        fs.readFile("homepage.html", function (err, data) {

            res.write(data);
            return res.end();
        })


    }
}).listen(1234);