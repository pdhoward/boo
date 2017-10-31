
//////////////////////////////////////////////////////
////////  			SCARY HTTP SERVER     	      ///////
///////            version 0.5.0            ///////
//////////////////////////////////////////////////

var express     = require('express');
var http        = require('http');
var path        = require('path');

// notice that a constructor is used to create httpServer, passing in the express middleware to
// configure the server object with a variety of useful functions -- like .listen
var app = express();
var httpServer = new http.Server(app);
var port = 3000;

// a path is defined for the home page, using .resolve method and the dynamic
// reference to the root directory
var htmlFile = path.resolve(__dirname, './public/index.html');

// express middleware is used here to identify the static folder for our web assets
// this link is used when the html page calls for its js source file
app.use(express.static('public'))

// express is also used to define the function that is executed whenever get method and path of '/'
// is detected by the Server
app.get('/', function(req, res) {
		res.sendFile(htmlFile)
	});

// this creates the server, and registers a listener on the defined port
httpServer.listen(port);

console.log("running on port " + port);
