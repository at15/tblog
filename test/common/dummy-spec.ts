/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
import Dummy = require('../../src/common/dummy');

var expect = chai.expect;

describe('Dummy', () => {
    it('foo got bar', () => {
        expect(Dummy.foo()).to.equal('bar');
    });
});