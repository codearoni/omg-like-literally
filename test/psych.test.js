/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const psych = require('../index').psych;

describe('psych.js', function () { 

    it('PSYCH!', function () {
        expect(psych).to.equal(false);
    });
});