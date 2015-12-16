/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
import Author = require('../../src/blog/author');
var expect = chai.expect;

describe('Author', () => {

    it('through exception on wrong config', ()=> {
        var badConfig = {name: 'mie', avatar: 'github'};
        var badConfig2 = {name: 'mie', avatar: 'github'};
        expect(()=> {
            // NOTE: this ugly method avoid typescript warning for wrong argument?
            delete badConfig.name;
            delete badConfig.avatar;
            new Author(badConfig);
        }).to.throw();
        expect(()=> {
            delete badConfig2.avatar;
            new Author(badConfig2);
        }).to.throw('avatar is not defined');
    });

    it('accept minimal config', ()=> {
        var minConfig = {
            name: 'mie',
            avatar: 'github'
        };
        expect(()=> {
            new Author(minConfig)
        }).not.to.throw();
    });
});