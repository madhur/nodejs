var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;

// var server = http.createServer(function(request, response)
// {

//     var file = parse(request.url).pathname;
//     console.log(__dirname + file);
//     fs.readFile(__dirname + file, function(err, data) 
//     {
//     	if(err)
//     		console.log(err);

//     	response.end(data);
//     });

// });

var server = http.createServer(function(request, response)
{

    var file = parse(request.url).pathname;

    console.log(join(__dirname , file));
    var stream = fs.createReadStream(__dirname + file);
    stream.on('data', function(data)
    {
    	
    	response.write(data);

    });

    stream.on('error', function(error)
    {
    	console.log(error);
    });

    stream.on('end', function()
    {
    	response.end();
    });

});


server.listen(3000);