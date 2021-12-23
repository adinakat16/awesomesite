var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/register') {
        fs.readFile('registration.html', function (err, data) {
            res.write(data);
            return res.end();
        })
    }
    else if (req.url != '/favicon.ico') {
        var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
        var q = url.parse(req.url, true);
        // console.log(q)

        console.log("hostname    : " + q.host); //returns 'localhost:8080'
        console.log("pathname    : " + q.pathname); //returns '/default.htm'
        console.log("search string: " + q.search + "\n"); //returns '?year=2017&month=february'

        var qdata = q.query;
        console.log(qdata); //returns an object: { year: 2017, month: 'february' }
        // console.log("query month data: "+qdata.month); //returns 'february'
        // console.log("query year data : "+qdata.year);  //returns '2017'
        console.log("query 1st key and value:\n" + Object.keys(qdata)[0] + " and " + Object.values(qdata)[0]);
        //returns first key and its value
    }

}).listen(1234);