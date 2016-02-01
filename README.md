# vk-universal-api

> Wrapper for [vk.com api](https://vk.com/dev/methods) to interact both from node and browsers (via bundlers like browserify or webpack)

## Install

```
$ npm install vk-universal-api --save
```

## Usage

```javascript
import api from 'vk-universal-api';
api.setToken('<string>');

api
  .get('audio.search', { q: 'noisia' })
  .then(([count, ...audios]) => {});
```

## Api

```js
api.get('<method-name>', params) // any method from https://vk.com/dev/methods
api.uploadAlbumImage('<album-id>', '<image-path>') // only from node due to post upload
```

## Tips

- [Access permissions](https://vk.com/dev/permissions)

## Changelog

- `v0.2.0` - add custom `uploadAlbumImage` method
- `v0.1.0` - breaking changes due to `universal-api` refactoring

## License

MIT © [ewnd9](http://ewnd9.com)
