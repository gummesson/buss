# buss

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

A tiny emitter for single, isolated events.

## Installation

```
npm install buss
```

## Usage

``` javascript
var buss = require('buss')
var data = buss()

function log(obj) {
  console.log(obj) // => { foo: 'bar' }
}

data.receive(log)
data.send({ foo: 'bar' })
data.dispose(log)
```

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/buss.svg?style=flat-square
[npm-url]: https://npmjs.org/package/buss
[license-img]: http://img.shields.io/npm/l/buss.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/buss.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/buss
