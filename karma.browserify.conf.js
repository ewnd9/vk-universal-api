module.exports = function(config) {
  var data = require('./karma.common.conf.js');
  data.files[0] = 'test/fixtures/bundles/app.browserify.bundle.js';
  config.set(data);
};
