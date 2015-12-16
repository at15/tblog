import chai = require('chai');
var expect = chai.expect;

import MemStore = require('../../src/store/mem-store');

describe('MemStore', ()=> {
    it('check table exists', ()=> {
        var store = new MemStore();
        expect(store.tableExists('author')).to.equal(false);
    })
});