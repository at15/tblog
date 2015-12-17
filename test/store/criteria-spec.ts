/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Criteria = require('../../src/store/criteria');

describe('Criteria', ()=> {
    var c:Criteria;

    before(()=> {
        c = new Criteria('age', 16);
    });

    it('not strict by default', ()=> {
        expect(c.match({age: '16'})).to.equal(true);
        expect(c.match({age: 16})).to.equal(true);
        expect(c.match({age: '15'})).to.equal(false);
        expect(c.match({})).to.equal(false);
    });

    it('strict mode', ()=> {
        expect(c.matchStrict({age: '16'})).to.equal(false);
        expect(c.matchStrict({age: 16})).to.equal(true);
    });

    it('operator < >', ()=> {
        var cb = new Criteria('age', 16, '>');
        expect(cb.match({age: 15})).to.equal(false);
        expect(cb.match({age: 16})).to.equal(false);
        expect(cb.match({age: 17})).to.equal(true);

        var cl = new Criteria('age',16,'<');
        expect(cl.match({age:15})).to.equal(true);
        expect(cl.match({age:16})).to.equal(false);
        expect(cl.match({age:17})).to.equal(false);
    });

    it('operator <= >=', ()=> {
        var cb = new Criteria('age', 16, '>=');
        expect(cb.match({age: 15})).to.equal(false);
        expect(cb.match({age: 16})).to.equal(true);
        expect(cb.match({age: 17})).to.equal(true);

        var cl = new Criteria('age',16,'<=');
        expect(cl.match({age:15})).to.equal(true);
        expect(cl.match({age:16})).to.equal(true);
        expect(cl.match({age:17})).to.equal(false);
    });
});