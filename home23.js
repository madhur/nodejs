var connect = require('connect');

connect().use(logger).use('/admin', restrict).use('/admin', admin).use(hello).listen(3000);

function logger(request, response, next)
{
	console.log('%s %s', request.method, request.url);
	next();
}

function hello(request, response)
{

	response.setHeader("Content-Type", "text/plain");
	response.end("Hello world");
}

function restrict(request, response, next)
{

	var authorization = request.headers.authorization;
	if(!authorization) return next(new Error('Unauthorized'));

	var parts = authorization.split(' ');
	var scheme = parts[0];
	var auth = new Buffer(parts[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
	authenticateWithDatabase(user , pass ,function (err)
	{
		if(err) return next(err);

		next();

	});



}

function authenticateWithDatabase(user, password, callback)
{

}

function admin(request, response , next)
{
	switch(request.url)
	{
		case '/':
			response.end("try/users");
			break;

		case '/users':
			res.setHeaders('Content-Type','application/json');
			res.end(JSON.stringify(['tobi', 'loki', 'jane']));
			break;


	}



}