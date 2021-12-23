var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        fs.readFile("homepage.html", function (err, data) {

            res.write(data);
            return res.end();
        })


    }
}).listen(1234);