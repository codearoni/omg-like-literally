
'use strict';

module.exports = function (fn) {
    try {
        return fn();
    } catch (e) {
        return e;
    }
};