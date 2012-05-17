
var assert = require('assert')
var ref = require('../')

describe('coerce', function () {

  it('should return `ref.types.void` for "void"', function () {
    var type = ref.coerceType('void')
    assert.strictEqual(ref.types.void, type)
  })

  it('should return a ref type when a "*" is present', function () {
    var type = ref.coerceType('void *')
    assert(type !== ref.types.void)
    assert.equal(type.indirection, ref.types.void.indirection + 1)
  })

  it('should coerce the "type" property of a Buffer', function () {
    var buf = new Buffer(ref.sizeof.int)
    buf.type = 'int'
    var type = ref.getType(buf)
    assert.strictEqual(ref.types.int, type)
    assert.strictEqual('int', buf.type)
  })

})