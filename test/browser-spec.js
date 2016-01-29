var chai = require('chai');
var expect = chai.expect;

it('should return audio', function(done) {
  window.vkApi.setToken(window.__env__.VK_TOKEN);
  window.vkApi
    .get('audio.search', { q: 'noisia' })
    .then(function(result) {
      const [count, ...audio] = result;

      expect(audio.length).to.equal(30);
      expect(count).to.be.above(200000);

      done();
    })
    .catch(function(err) {
      done(err)
    });
});
