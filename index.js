/*!
 * Dependencies
 */

var slice = require('sliced')

/*!
 * Exports
 */

module.exports = Buss

/**
 * Initialize `Buss`.
 *
 * @constructor
 */

function Buss() {
  if (!(this instanceof Buss))
    return new Buss()
  this.events = []
}

/**
 * Subscribe to the event.
 *
 * @param {Function} receivers
 * @return {this}
 */

Buss.prototype.receive = function() {
  var args = slice(arguments)
  args.forEach(function(fn) {
    this.events.push(fn)
  }.bind(this))
  return this
}

/**
 * Unsubscribe from the event.
 *
 * @param {Function} receivers
 * @return {this}
 */

Buss.prototype.dispose = function() {
  var args = slice(arguments)
  args.forEach(function(fn) {
    var id = this.events.indexOf(fn)
    if (~id) this.events.splice(id, 1)
  }.bind(this))
}

/**
 * Trigger the event.
 *
 * @param {Mixed} parameters
 * @return {this}
 */

Buss.prototype.send = function() {
  var args = slice(arguments)
  this.events.forEach(function(fn) {
    fn.apply(fn, args)
  })
  return this
}
