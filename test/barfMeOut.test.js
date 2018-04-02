/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const barfMeOut = require('../index').barfMeOut;

describe('barfMeOut.js', function () { 

    it('Barf me out!', function () {
        let cantEvenDeal;
        
        try {
            barfMeOut();
        } catch (e) {
            cantEvenDeal = e;
        }

        expect(cantEvenDeal).to.be.an('error');
    });
});