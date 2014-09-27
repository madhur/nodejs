var http=require('http');
var fs = require('fs');


http.createServer(function(request, response)
{

	console.log(request.url);
	if(request.url=="/entries.json")
	{
		//response.write("madhur");

		fs.readFile('./entries.json', function(err, data)
		{
			if(err)
				console.log(err);

			var contents= JSON.parse(data.toString());
			console.log(contents);

			var result="<html><body><h1>Posts</h1><ul>";
			
			for (var i=0;i<contents.length;++i)
			{
				result =result +"<li>" + contents[i].title+"</li>";
			}

			result = result + "</ul></body></html>";
			
			//response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(result);

			console.log(result);
			response.end();

		});


	}

	

}).listen(3000);