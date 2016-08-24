var child = require('child_process')
var toISO = require('./')
var assert = require('assert')

var command = 'date --iso-8601=seconds'
child.exec(command, function (error, stdout, stderr) {
  assert.ifError(error)
  assert.equal(
    toISO(new Date()),
    stdout.toString().trim()
  )
})
