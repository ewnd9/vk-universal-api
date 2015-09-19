# vk-universal-api

works both on server and in browser via jsonp

## Install

```
$ npm install vk-universal-api --save
```

## Usage

```javascript
var api = require('vk-universal-api');
api.setToken(<string>);

api.method('audio.search', { q: 'noisia' }).then(function(result) {
  // result
});
```

## License

MIT © [ewnd9](http://ewnd9.com)
