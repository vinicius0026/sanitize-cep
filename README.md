# Sanitize CEP

[![build](https://travis-ci.org/tallesl/sanitize-cep.png)](https://travis-ci.org/tallesl/sanitize-cep)
[![coverage](https://coveralls.io/repos/tallesl/sanitize-cep/badge.png?branch=master)](https://coveralls.io/r/tallesl/sanitize-cep?branch=master)
[![dependencies](https://david-dm.org/tallesl/sanitize-cep.png)](https://david-dm.org/tallesl/sanitize-cep)
[![devDependencies](https://david-dm.org/tallesl/sanitize-cep/dev-status.png)](https://david-dm.org/tallesl/sanitize-cep#info=devDependencies)
[![npm module](https://badge.fury.io/js/sanitize-cep.png)](http://badge.fury.io/js/sanitize-cep)

[![npm](https://nodei.co/npm/sanitize-cep.png?mini=true)](https://nodei.co/npm/sanitize-cep)

Sanitizes CEPs (Brazil's ZIP codes).

## Usage

```js
$ npm install sanitize-cep
sanitize-cep@1.0.0 node_modules/sanitize-cep
$ node
> var sanitizeCep = require('sanitize-cep')
undefined
> sanitizeCep('30130-010')
'30130010'
> sanitizeCep('30130-lol')
null
```