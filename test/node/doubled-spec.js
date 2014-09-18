/**
 * Created by julianghionoiu on 16/09/2014.
 */
RANDOM_OFFSET = 1;

var mockery = require('mockery');

module.exports = {
    setUp: function(callback) {
        mockery.enable();
        mockery.registerAllowable('../../server/util/doubled');

        // Mock the random generator inside the doubled source
        var randomMock = {
            generate: function (min, max) { return RANDOM_OFFSET; }
        };
        mockery.registerMock('./my-random', randomMock);
        callback();
    },
    tearDown: function(callback) {
        mockery.deregisterAll();
        mockery.disable();
        callback();
    },

    "should almost double received number": function (test) {
        var doubled = require('../../server/util/doubled');

        test.equal(doubled.calculate(2), 4 - RANDOM_OFFSET);
        test.equal(doubled.calculate(5), 10 - RANDOM_OFFSET);
        test.done();
    },

    "should accept only numbers": function (test) {
        var doubled = require('../../server/util/doubled');

        test.throws(function () { doubled.calculate(); });
        test.throws(function () { doubled.calculate(null); });
        test.throws(function () { doubled.calculate(true); });
        test.throws(function () { doubled.calculate([]); });
        test.throws(function () { doubled.calculate({}); });
        test.throws(function () { doubled.calculate('asdf'); });
        test.throws(function () { doubled.calculate('123'); });
        test.done();
    }
};