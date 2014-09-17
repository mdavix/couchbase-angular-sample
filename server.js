var tlrg_app = require('./tlrg-app');
var startStopDaemon = require('start-stop-daemon');

// connection configuration to pass on to couchbase.connect(). Note that
// while connecting with the server we are also opening the beer-sample
// bucket.
var config = {
    host: ["localhost:8091"],
    bucket: 'beer-sample'
};

var daemonConfig = {
    outFile: './log/appOutFile.log',
    errFile: './log/appErrFile.log',
    max: 3 //the script will run 3 times at most
};

// Check if this file has been loaded directly from node. We don't want people require-ing this file.
if (require.main == module) {
    startStopDaemon(daemonConfig, function() {
        console.log('Starting application');
        tlrg_app.start(config);
    });
}