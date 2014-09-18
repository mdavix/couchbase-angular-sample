
// Dump log messages
casper.on('remote.message', function(message) {
    this.echo('Log: '+ message, 'LOG');
});

// Dump uncaught errors
casper.on('page.error', function(msg, trace) {
    this.echo('Error: ' + msg, 'ERROR');
});

casper.test.begin('He have beers', 2, function suite(test) {
    casper.start('http://localhost:3000/');

    casper.then(function() {
        test.assertExists('[ng-controller="AppCtrl"]', 'App Controller should exist');
        test.assertElementCount('[ng-repeat="beer in beers"]', 20, "Should be 20 beers");
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('The sockets are working', 1, function suite(test) {
    var probeMessage = 'myLittleMessage';

    casper.start('http://localhost:3000/');

    casper.then(function() {
        this.fillSelectors('[ng-submit="sendMessage()"]', {
            '[ng-model="message"]': probeMessage
        }, true);

        test.assertSelectorHasText('[ng-repeat="message in messages"]', probeMessage);
    });

    casper.run(function() {
        test.done();
    });
});