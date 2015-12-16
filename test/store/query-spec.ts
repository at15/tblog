import chai = require('chai');
var expect = chai.expect;

import Query = require('../../src/store/query');

describe('Store', () => {
    it('use chain for query', ()=> {
        var q = new Query();
        var t = 'author';
        expect(q.setTable(t).getTable()).to.equal(t);
    });
});