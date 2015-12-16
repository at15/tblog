import chai = require('chai');
var expect = chai.expect;

import MemTable = require('../../src/store/mem-table');

describe('MemTable', ()=> {
    it('constructor', ()=> {
        expect(()=> {
            new MemTable({});
        }).to.throw('name is not defined');
    })
});