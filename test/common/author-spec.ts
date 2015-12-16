/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Author = require('../../src/common/author');

describe('Author', () => {
    // TS will have error in compile time.
    it('require name and avatar', ()=> {
        expect(()=> {
            new Author();
        }).to.throw(TypeError);
        var a2 = new Author({name: 'jack'});
        expect(a2.isValid()).to.equal(false);
        var a3 = new Author({name: 'jack', avatar: 'a.png'});
        expect(a3.isValid()).to.equal(true);
    });
});