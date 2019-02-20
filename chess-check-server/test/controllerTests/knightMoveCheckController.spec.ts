import { expect } from 'chai';
var request = require('request');

describe('Knight Move Request', function () {
    it('General Route', function(done) {
        request('http://localhost:3000' , function(_error: any, _response: any, body: any) {
            expect(body).to.equal('Hello World!');
            done();
        });
    });

    it('wrong position parameter', function (done) {
        request('http://localhost:3000/api/knight/d5' , function(_error: any, _response: any, body: any) {
            expect(body).to.equal('Not a valid position');
            done();
        });
    });
    it('good position to go parameter', function (done) {
        request('http://localhost:3000/api/knight/A8' , function(_error: any, _response: any, body: any) {
            expect(body).to.not.equal('Not a valid position');
            done();
        });
    });
});