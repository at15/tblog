import chai = require('chai');
var expect = chai.expect;

import Query = require('../../src/store/query');

describe('Store', () => {
    it('use chain for query', ()=> {
        var q = new Query();
        var t = 'author';
        expect(q.setTable(t).getTable()).to.equal(t);
        expect(q.where('a', '12').getTable()).to.equal(t);
    });

    it('use criteria for match', ()=> {
        var q = new Query();
        q.where('age', 16);
        q.where('name', 'jack');
        var man1 = {name: 'sam', age: 16};
        var man2 = {name: 'jack', age: '16'};
        var man3 = {name: 'jack', age: 16};
        expect(q.match(man1)).to.equal(false);
        expect(q.match(man2)).to.equal(true);
        expect(q.match(man3)).to.equal(true);
    });

    it('can insert data', ()=> {
        var q = new Query();
        q.insert({a: 123});
        expect(q.getData()).to.eql({a: 123});
    })
});