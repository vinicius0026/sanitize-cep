var assert      = require('assert')
  , sanitizeCep = require('../lib/sanitize-cep.js')

it('should sanitize \'30130-010\' to \'30130010\'', function () {
  assert.equal(sanitizeCep('30130-010'), '30130010')
})

it('should sanitize 99999999    to \'99999999\'', function () {
  assert.equal(sanitizeCep(99999999), '99999999')
})

it('should sanitize \'3013001\'   to null', function () {
  assert.equal(sanitizeCep('3013001'), null)
})

it('should sanitize \'301300l0\'  to null', function () {
  assert.equal(sanitizeCep('301300l0'), null)
})

it('should sanitize 30000.111   to null', function () {
  assert.equal(sanitizeCep(30000.111), null)
})

it('should sanitize \'foobar\'    to null', function () {
  assert.equal(sanitizeCep('foobar'), null)
})

it('should sanitize undefined   to null', function () {
  assert.equal(sanitizeCep(), null)
})

it('should sanitize null        to null', function () {
  assert.equal(sanitizeCep(null), null)
})

