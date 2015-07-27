var child = require('child_process')
var package = require('./package')

require('tape')(package.name, function(test) {
  var command = 'date --iso-8601=seconds'
  test.plan(1)
  child.exec(command, function(erorr, stdout, stderr) {
    test.equal(
      require('./')(new Date()),
      stdout.toString().trim(),
      'same as `' + command + '`') }) })
