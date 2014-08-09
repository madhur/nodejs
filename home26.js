var connect = require('connect');
var basicAuth = require('basic-auth-connect')

var app = connect().use(basicAuth('tj', 'tobi')).listen(3000);

var users = {
	tobi: 'foo',
	loki: 'bar',
	jane: 'baz'
}