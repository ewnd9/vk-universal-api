import UniversalApi from 'universal-api';

export default new UniversalApi({
  baseUrl: 'https://api.vk.com/method/',
  jsonp: true,
  query: function() {
    return {
      access_token: this.token
    };
  },
  transformResponse: response => {
    if (response.response) {
      return response.response;
    } else {
      throw response.error;
    }
  }
});
