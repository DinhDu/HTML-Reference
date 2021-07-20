var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url =='/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url =="/user"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is user Page.</p></body></html>');
        res.end();
    }
    else if (req.url =="/admin"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else if (req.url =="/class"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is class Page.</p></body></html>');
        res.end();
    }
    else if (req.url =="/student"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if (req.url =="/HTML"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./HTML.html', null, function(err, data){
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            } else {
                res.write(data)
                res.end();
            }
        })
    }
});
server.listen(8000, function() {
    console.log('Server is running...');
});


