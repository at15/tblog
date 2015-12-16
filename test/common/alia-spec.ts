/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Alias = require('../../src/common/alias');

describe('Alias', () => {
    var a = new Alias({javascript: 'js'});

    it('return alias', ()=> {
        expect(a.get('javascript')).to.equal('js');
    });

    it('return same string when no alias', () => {
        expect(a.get('php')).to.equal('php');
    });
});
