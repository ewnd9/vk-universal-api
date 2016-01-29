var fs = require('fs');                                                                                                                                                                                                                  [0/33]
var expect = require('chai').expect;

describe('api', () => {

  var lib = require('./../src/index');
  lib.setToken(process.env.VK_TOKEN);

  it('audio.search success', function(done) {
    this.timeout(10000);

    lib.get('audio.search', { q: 'noisia' }).then(function(result) {
      const [count, ...audio] = result;

      expect(count).to.be.above(200000);
      expect(audio.length).to.equal(30);

      done();
    }).catch(err => done(err));
  });

  it('wall.editComment throw error', function(done) {
    this.timeout(10000);

    lib.get('wall.editComment', {}).then(function(result) {
      done('fail');
    }).catch(err => {
      expect(err.error_msg).to.equal('Access denied: no access to call this method');
      done();
    });
  });

});
