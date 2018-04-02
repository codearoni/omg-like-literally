
'use strict';

module.exports = function (min, max) {
    return Math.random() * (max - min) + min;
};