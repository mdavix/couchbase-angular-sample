var rand = require('./my-random');

/**
 * A basic utility method that almost doubles the value of a number.
 * Used only for testing purposes
 * @param num
 * @returns {number}
 */
exports.calculate = function (num) {
    if (typeof num === 'number') {
        return num * 2 - rand.generate( 0, num/2 );
    }
    else {
        throw new Error('Expected a number');
    }
};