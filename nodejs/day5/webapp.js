//Nodejs is used to create nodejs Application and host it

const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

function display(url, res) {
    const file = __dirname + url + ".html";//CurrentDir + fileName + extension will give the actual filename of UR project.
    fs.createReadStream(file).pipe(res)
}

http.createServer((req, res) => {
if (req.url != '/favicon.ico') {
       
        console.log(req.url);
        switch (req.url) {
            case '/homepage':
                display(req.url, res);
                break;
            case '/registration':
                display(req.url, res);
                break;
            case '/contactus':
                display(req.url, res);
                break;
            case '/aboutus':
                display(req.url, res);
                break;
        }
        
        
    }
}).listen(1234)