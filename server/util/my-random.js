/**
 * Created by julianghionoiu on 16/09/2014.
 */

/**
 * A basic utility that offsets a number by
 * @param num
 * @returns {number}
 */
exports.generate = function random (low, high) {
    return Math.random() * (high - low) + low;
}