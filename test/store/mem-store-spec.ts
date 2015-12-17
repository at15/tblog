import chai = require('chai');
var expect = chai.expect;

import Query = require('../../src/store/query');
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
    });

    it('insert and query data', ()=> {
        var store = new MemStore();
        var author = new MemTable({
            name: 'author',
            identity: 'name'
        });
        store.createTable(author);
        var insertJack = new Query();
        insertJack.setTable('author')
            .insert({
                name: 'jack'
            });
        store.insert(insertJack);
        var findJack = new Query();
        findJack.setTable('author')
            .where('name', 'jack');
        var result = store.query(findJack);
        expect(result[0]).to.eql({name: 'jack'});
    })
});