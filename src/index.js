import UniversalApi from 'universal-api';

const api = new UniversalApi({
  baseUrl: 'https://api.vk.com/method/',
  jsonp: true,
  query: function() {
    return {
      access_token: this.token
    };
  },
  transformResponse: res => {
    const body = res.body;

    if (body.response) {
      return body.response;
    } else if (body.error) {
      throw body.error;
    } else if (Object.keys(body).length > 0) {
      return body;
    } else {
      return res.text;
    }
  }
});

api.uploadAlbumImage = function(albumId, filePath) {
  return api
    .get('photos.getUploadServer', { aid: albumId })
    .then(result => api.post(result.upload_url, undefined, undefined, {
      attach: {
        file1: filePath
      }
    }))
    .then(res => api.get('photos.save', JSON.parse(res)));
};

export default api;
