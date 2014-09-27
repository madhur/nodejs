var http = require('http');

http.createServer(function(request, response)
{
	var body = 'hello world';
	response.setHeader('Content-Length', body.length);
	response.setHeader('Content-Type', 'text/plain');
	response.write(body);
	response.end();

}).listen(3000);