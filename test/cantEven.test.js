/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const literallyCantEven = require('../index').cantEven;

describe('cantEven.js', function () {

    it('Literally can\'t even', function () {
        const forReals = literallyCantEven();
        expect(forReals % 2 !== 0).to.equal(true);
    });
});