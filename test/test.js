var expect = require('chai').expect;

module.exports = function(vkApi, env) {
  vkApi.setToken(env.VK_TOKEN);

  it('audio.search success', function(done) {
    this.timeout(10000);

    vkApi.get('audio.search', { q: 'noisia' })
      .then(function(result) {
        const [count, ...audio] = result;

        expect(count).to.be.above(200000);
        expect(audio.length).to.equal(30);

        done();
      })
      .catch(err => done(err));
  });

  it('wall.editComment throw error', function(done) {
    this.timeout(10000);

    vkApi.get('wall.editComment', {})
      .then(function(result) {
        done('fail');
      })
      .catch(err => {
        expect(err.error_msg).to.equal('Access denied: no access to call this method');
        done();
      });
  });
};
