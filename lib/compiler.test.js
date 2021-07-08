
const { compiler } = require('./compiler')
const { javascript } = require('./mock')
const assert = require('assert')
console.log(compiler(javascript))
console.log((javascript).length, compiler(javascript).length)
assert((javascript).length === compiler(javascript).length)