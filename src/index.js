import UniversalApi from 'universal-api';

function VkUniversalApi() {
  UniversalApi.call(this, {
    baseUrl: 'https://api.vk.com/method/',
    jsonp: true,
    query: () => ({ access_token: this.token }),
    transformResponse: response => {
      if (response.response) {
        return response.response;
      } else {
        throw response.error;
      }
    }
  });
};

VkUniversalApi.prototype = Object.create(UniversalApi.prototype);

VkUniversalApi.prototype.setToken = function(token) {
  this.token = token;
};

export default new VkUniversalApi();
