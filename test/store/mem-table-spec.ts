import chai = require('chai');
var expect = chai.expect;

import MemTable = require('../../src/store/mem-table');

describe('MemTable', ()=> {
    it('constructor', ()=> {
        expect(()=> {
            // NOTE: use this ugly method to avoid ts compile error
            var badBoy = {name: 'boy', identity: 'name'};
            delete badBoy.name;
            delete badBoy.identity;
            new MemTable(badBoy);
        }).to.throw('name is not defined');
    })
});