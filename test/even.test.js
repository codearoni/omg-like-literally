/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const literallyEven = require('../index').even;

describe('even.js', function () {

    it('Literally even', function () {
        const nuhUh = literallyEven();
        expect(nuhUh % 2 === 0).to.equal(true);
    });
});