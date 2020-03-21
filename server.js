
var http = require('http');
var os = require('os');
// var fileSystem = require('fs');

var server = http.createServer(function (req, resp) {
	var contentType = 'text/html';

	var show = "OS: " + os.type() + " " + os.release() + " Image: v1"

	resp.writeHead(200, { 'Content-Type': contentType });
	resp.write(show);
	resp.end();
});

server.listen(8080);


