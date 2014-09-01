// set up ======================================================================
var couchbase = require('couchbase'); 					// couchnode for couchbase
var port  	  = process.env.PORT || 8080; 				// set the port
var morgan    = require('morgan'),
var express = require('express'),

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

	var app = module.exports = express.createServer();

	// Hook Socket.io into Express
	var io = require('socket.io').listen(app);

	// Configuration
	app.configure(function(){
	  app.set('views', __dirname + '/server/views');
	  app.set('view engine', 'jade');
	  app.set('view options', {
	    layout: false
	  });
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(express.static(__dirname + '/public'));
	  app.use(app.router);
	});

	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	});

	app.configure('production', function(){
	  app.use(express.errorHandler());
	});

	// Routes
	app.get('/', routes.index);
	app.get('/partials/:name', routes.partials);

	// redirect all others to the index (HTML5 history)
	app.get('*', routes.index);

	// Socket.io Communication
	io.sockets.on('connection', socket);

	// Start server
	app.listen(3000, function(){
	  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
	});

	// listen (start app with node server.js) ======================================
	app.listen(port);
	console.log("App listening on port " + port);
};

