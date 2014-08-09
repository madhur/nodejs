var express = require('express');
var app = express();

app.get('/', function(request, response)
{

	response.send('Hello');

});

app.listen(3000);