
'use strict';

const getRandomNum = require('./getRandomNum');

module.exports = function () {
    let num;

    do {
        num = getRandomNum(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    } while (num % 2 === 0);

    return num;
};