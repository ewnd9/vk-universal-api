# vk-universal-api

> Convenience wrapper for [vk.com api](https://vk.com/dev/methods) to interact both from node and browsers (via bundlers like browserify or webpack)

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

## Changelog

- `v0.1.0` - breaking changes due to `universal-api` refactoring

## License

MIT © [ewnd9](http://ewnd9.com)
