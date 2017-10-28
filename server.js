
//////////////////////////////////////////////////////
////////  			SCARY HTTP SERVER     	      ///////
///////            version 0.5.0            ///////
//////////////////////////////////////////////////

var express     = require('express');
var http        = require('http');
var path        = require('path');

var app = express();
var httpServer = new http.Server(app);
var port = 3000;

var htmlFile = path.resolve(__dirname, './public/index.html');

app.use(express.static('public'))

app.get('/', function(req, res) {
		res.sendFile(htmlFile)
	});

httpServer.listen(port);

console.log("running on port " + port);
