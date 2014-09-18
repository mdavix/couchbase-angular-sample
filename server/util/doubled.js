var rand = require('./my-random');

/**
 *
 * @param num
 * @returns {number}
 */
module.exports.calculate = function (num) {
    if (typeof num === 'number') {
        return num * 2 - rand.generate( 0, num/2 );
    }
    else {
        throw new Error('Expected a number');
    }
};