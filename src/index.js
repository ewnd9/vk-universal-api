var UniversalApi = require('universal-api');

var token = null;
export var setToken = (_token) => token = _token;

var api = new UniversalApi('https://api.vk.com/method/', {
  jsonp: true,
  transformRequest: function(method, params) {
    params.access_token = token;
    return params;
  },
  transformResponse: function(res, resolve, reject) {
    if (res.body.error) {
      // console.log(res.body.error);
      reject(res.body.error);
    } else if (res.body.response) {
      if (res.body.response.shift) {
        var count = res.body.response.shift();

        resolve({
          meta: count,
          items: res.body.response
        });
      } else {
        resolve(res.body.response);
      }
    }
  }
});

export var method = api.apiRequest;

export var audioSearch = function(q) {
  return api.apiRequest('audio.search', { q: q });
};

if (typeof window !== 'undefined') {
  window.vk = module.exports;
}
