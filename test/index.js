/*!
 * Dependencies
 */

var test = require('tape')
var buss = require('../')

/*!
 * Tests
 */

test('Buss()', function(t) {
  var data = buss()

  function one() {}
  function two() {}

  t.test('.receive()', function(assert) {
    data.receive(one, two)
    assert.equal(data.events.length, 2)
    assert.end()
  })

  t.test('.dispose()', function(assert) {
    data.dispose(one, two)
    assert.equal(data.events.length, 0)
    assert.end()
  })

  t.test('.send()', function(assert) {
    function three(x, y) {
      assert.deepEqual(x, { foo: 'bar' })
      assert.deepEqual(y, { baz: 'qux' })
    }
    data.receive(three)
    data.send({ foo: 'bar' }, { baz: 'qux' })
    assert.end()
  })
})
