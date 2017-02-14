
import {expect} from 'chai';
import 'aurelia-polyfills';
import {PragmaMasterDetail} from './../../../src/components/pragma-master-detail/pragma-master-detail';

describe('PragmaMasterDetail Tests', function() {
    let pragmaMasterDetail;

    beforeEach(function() {
        pragmaMasterDetail = new PragmaMasterDetail ({});
    });
    
    it('constructor', function() {
        expect(pragmaMasterDetail).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => PragmaMasterDetail()).to.throw("Cannot call a class as a function");
    });    
})
