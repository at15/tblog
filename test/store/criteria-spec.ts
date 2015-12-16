/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Criteria = require('../../src/store/criteria');

describe('Criteria', ()=> {
    it('not strict by default', ()=> {
        var c = new Criteria('age', 16);
        expect(c.match({age: '16'})).to.equal(true);
        expect(c.match({age: 16})).to.equal(true);
        expect(c.match({age: '15'})).to.equal(false);
        expect(c.match({})).to.equal(false);
    });

    it('strict mode', ()=> {
        var c = new Criteria('age', 16);
        expect(c.matchStrict({age: '16'})).to.equal(false);
        expect(c.matchStrict({age: 16})).to.equal(true);

    })
});