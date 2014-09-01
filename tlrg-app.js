// set up ======================================================================
var couchbase 	= require('couchbase'); 					// couchnode for couchbase
var port  	  	= process.env.PORT || 8080; 				// set the port
var morgan    	= require('morgan');
var express 	= require('express');
var bodyParser 	= require('body-parser');
var methodOverride = require('method-override');

exports.start = function(dbConfig)
{
	// configuration ===============================================================
	var db = new couchbase.Connection( dbConfig, function( err ) {
	    if(err) {
	      console.error("Failed to connect to cluster: " + err);
	      process.exit(1);
	    }

	    console.log('Couchbase Connected');
 	});

 	var routes = require('./server/routes', db);
 	var socket = require('./server/socket.js', db);

	var app = module.exports = express();
	var server = require('http').createServer(app);

	// Hook Socket.io into Express
	var io = require('socket.io').listen(server);

	// Configuration
	app.set('views', __dirname + '/server/views');
	app.set('view engine', 'jade');
	app.set('view options', {
		layout: false
	});
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
	app.use(express.static(__dirname + '/public'));
	
	// Routes
	app.get('/', routes.index);
	app.get('/partials/:name', routes.partials);

	// redirect all others to the index (HTML5 history)
	app.get('*', routes.index);

	// Socket.io Communication
	io.sockets.on('connection', socket);

	// Start server
	server.listen(3000, function(){
	  console.log("Express server listening on port %d", server.address().port);
	});
};

