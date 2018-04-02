/* globals describe, it */

'use strict';

const expect = require('chai').expect;
const path = require('path');
const spawn = require('child_process').spawn;

describe('dying.js', function () {

    it('the process is literally dying', function (done) {
        const ps = spawn('node', [path.join(__dirname, 'literallyDying.js')]);

        ps.on('error', function (err) {
            throw err;
        });

        ps.on('close', function (code) {
            expect(code).to.equal(1);
            done();
        });
    });
});