var http = require('http');

var server = http.createServer(function(req, res) {
	//my stuff here:
	res.write('Hello World');
	res.end();

});

server.listen(9000, function(){
	console.log("Listening on port 9000");
});