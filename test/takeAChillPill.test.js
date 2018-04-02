/* globals describe, it */

'use strict';

const expect = require('chai').expect;

const barfMeOut = require('../index').barfMeOut;
const takeAChillPill = require('../index').takeAChillPill;

describe('takeAChillPill.js', function () { 

    it('like, take a chill pill!', function () {
        const likeAddTwoNumbers = function () {
            return 1 + 2;
        };
        
        const forReals = takeAChillPill(likeAddTwoNumbers);
        const omg = takeAChillPill(barfMeOut);

        expect(forReals).to.equal(1 + 2);
        expect(omg).to.be.an('error');
    });
});