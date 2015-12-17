import chai = require('chai');
var expect = chai.expect;

import Query = require('../../src/store/query');
import MemStore = require('../../src/store/mem-store');
import MemTable = require('../../src/store/mem-table');


describe('MemStore', ()=> {
    var store, author;

    beforeEach('setup table', ()=> {
        store = new MemStore();
        author = new MemTable({
            name: 'author',
            identity: 'name'
        });
        store.createTable(author);
    });

    it('check table exists', ()=> {
        expect(store.tableExists('article')).to.equal(false);
        expect(store.tableExists('author')).to.equal(true);
    });

    it('insert and query single data', ()=> {
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
    });

    it('insert multiple data', ()=> {
        var num = 10;
        var insertQ = new Query();
        insertQ.setTable('author');
        for (var i = 0; i < num; i++) {
            insertQ.insert({
                name: 'jack' + i
            });
        }
        store.insert(insertQ);
        console.log(store.getTable('author'));
        expect(store.getTable('author').data.length).to.equal(num);
    });

});