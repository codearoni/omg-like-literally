/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const gagMeWithASpoon = require('../index').gagMeWithASpoon;

describe('gagMeWithASpoon.js', function () { 

    it('Gag me with a spoon!', function () {
        let cantEvenDeal;
        
        try {
            gagMeWithASpoon();
        } catch (e) {
            cantEvenDeal = e;
        }

        expect(cantEvenDeal).to.be.an('error');
    });
});