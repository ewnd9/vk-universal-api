var fs = require('fs');                                                                                                                                                                                                                  [0/33]
var expect = require('chai').expect;

describe('api', () => {

  var lib = require('./../src/index');
  lib.setToken(process.env['VK_TOKEN']);

  it('audio.search', function(done) {
    this.timeout(10000);

    lib.method('audio.search', { q: 'noisia' }).then(function(result) {
      expect(result.meta).to.be.above(700000);
      expect(result.items.length).to.equal(30);
      done();
    });
  });

});
