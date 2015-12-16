/**
 * Created by gpl on 15/12/16.
 */
import chai = require('chai');
var expect = chai.expect;

import Dummy = require('../../src/common/dummy');

describe('Dummy', () => {
    it('foo got bar', () => {
        expect(Dummy.foo()).to.equal('bar');
    });
});