/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Config = require('../../src/common/config');

describe('Config', () => {

    it('throw error when attribute not defined', ()=> {
        expect(() => {
            var c = new Config();
            c.setAttributes(
                {a: 'jack'},
                ['a', 'b']
            );
            //}).to.throwException(function (e) { // get the exception object
            //    expect(e.message).to.equal('b is not defined');
            //});
            //}).to.throwException(function (e) { // get the exception object
            //    expect(e).to.equal('a');
            //});
        }).to.throw('b is not defined');

        expect(()=> {
            var c = new Config();
            c.setAttributes({
                    a: 'jack'
                },
                ['a']
            );
        }).not.to.throw();
    });

    it('does not throw error when required is false', ()=> {
        expect(() => {
            var c = new Config();
            c.setAttributes(
                {a: 'jack'},
                ['a', 'b'], false
            );
        }).not.to.throw('b is not defined');
    })
});
