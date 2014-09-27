var http = require('http');

http.createServer(function(request, response)
{
	var url = 'http://google.com';
	var body='Redirecting to google';

	response.setHeader('Location', url);
	response.setHeader('Content-Length', body.length);
	response.setHeader('Content-Type', 'text/html');
	response.statusCode = 302;
	response.write(body);
	response.end();

}).listen(3000);