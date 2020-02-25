'use strict';
const moduleName = require('./package.json').name;

var slugify = require('transliteration').slugify;
var hexo = hexo || {};
var config = hexo.config || {};
var pluginConfig = config.permalink_pinyin || {};
const {log, extend } = hexo;

hexo.extend.filter.register('new_post_path', function (data, replace) {
  log.debug('=========== %s ===========', moduleName);
  log.debug(data.path, data.slug)
  // https://github.com/andyhu/transliteration#slugifystr-options
  const options = Object.assign({}, {}, { ignore: ['/', '.'] })
  data.slug = slugify(data.slug, options);
}, 1);

