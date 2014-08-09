var http = require('http');
var url = require('url');

var items = [];

var server = http.createServer(function(request, response)
{

	switch(request.method)
	{
		case 'POST':
			var item = '';
			request.setEncoding('utf8');
			request.on('data', function(data)
			{
				item = item + data;

			});

			request.on('end', function()
			{

				items.push(item);
				response.end("OK\n");

			});

			break;

		case 'GET':
			response.setHeader('Content-Length', Buffer.byteLength(JSON.stringify(items)));
			response.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			response.write(JSON.stringify(items));
			response.end();
			break;

		case 'DELETE':
			var path = url.parse(request.url).pathname;
			var i = parseInt(path.slice(1), 10);

			if(isNaN(i))
			{
				response.statusCode = 400;
				response.end("Invalid Item ID");
			}
			else if(!items[i])
			{
				response.statusCode = 404;
				response.end("Item not found");

			}
			else
			{
				items.splice(i,1);
				response.end("OK\n");

			}
			break;

	}

});

server.listen(3000);