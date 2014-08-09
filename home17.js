var http = require('http');
var items = [];

var server = http.createServer(function(request, response)
{
    if (request.url == "/")
    {
        switch (request.method)
        {
            case 'GET':
            	show(response);
            	break;

            case "POST":
            	add(request, response);
            	break;


        };
    }
    else
    {
        notfound(response);
    }



}).listen(3000);

var show = function(response)
{
	var body = "<html><body><ul>";
	var end = "</ul><form method='post' action='/'><input type='text' name='todo' /><input type='submit' name='submit' value='Submit' /></form></body></html>";
	var text = '';
	for(var i=0;i<items.length;++i)
	{

		text = text + "<li>" + items[i].todo + "</li>";		

	}

	

	response.setHeader("Content-Type", 'text/html');
	response.end(body + text + end);


};

var add = function(request , response)
{
	var qs = require('querystring');
	var body = '';
	request.setEncoding('utf8');
	request.on('data', function(data)
	{
		body = body + data;

	});

	request.on('end', function()
	{
		var obj = qs.parse(body);
		console.log(obj);
		items.push(obj);
		show(response);		

	});



};

var notfound = function(response)
{

	response.statusCode = 404;
	response.setHeader("Content-Type", 'text/plain');
	response.end('not found');

};



var badreq = function(response)
{

	response.statusCode = 400;
	response.setHeader("Content-Type", 'text/plain');
	response.end('Bad Request');

};