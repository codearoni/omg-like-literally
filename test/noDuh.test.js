/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const noDuh = require('../index').noDuh;

describe('noDuh.js', function () { 

    it('no duh!', function () {
        expect(noDuh).to.equal(true);
    });
});