/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Author = require('../../src/common/author');

describe('Author', () => {
    // FIXME: ts won't throw error at compile time, and it does not add check for interface
    // in runtime
    it('require name and avatar', ()=> {
        //expect(() => {
        //    new Author({})
        //}).to.throw();
        //expect(() => {
        //    new Author({name: 'jack'})
        //}).to.throw();
        //expect(() => {
        //    new Author({name: 'jack', avatar: 'abc'})
        //}).to.not.throw();
    });
});