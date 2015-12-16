import chai = require('chai');
var expect = chai.expect;

import MemStore = require('../../src/store/mem-store');
import MemTable = require('../../src/store/mem-table');


describe('MemStore', ()=> {
    it('check table exists', ()=> {
        var store = new MemStore();
        expect(store.tableExists('author')).to.equal(false);
        var author = new MemTable({
            name: 'author',
            identity: 'name'
        });
        store.createTable(author);
        expect(store.tableExists('author')).to.equal(true);
    })
});