import chai = require('chai');
var expect = chai.expect;

import Print = require('../../src/util/print');
import MemStore = require('../../src/store/mem-store');
import MemTable = require('../../src/store/mem-table');
import Query = require('../../src/store/query');

describe('Util', ()=> {
    var store, author;
    it('can print', ()=> {
        store = new MemStore();
        author = new MemTable({
            name: 'author',
            identity: 'name'
        });
        store.createTable(author);
        var insertQ = new Query();
        insertQ.setTable('author');
        for (var i = 0; i < 10; i++) {
            insertQ.insert({
                name: 'jack' + i,
                age: i
            });
        }
        store.insert(insertQ);
        Print.table(store.getTable('author'));
    });
});