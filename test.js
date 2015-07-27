var child = require('child_process')
var package = require('./package')

require('tape')(package.name, function(test) {
  var command = 'date --iso-8601=seconds'
  test.equal(
    require('./')(new Date()),
    child.execSync(command).toString().trim(),
    'same as `' + command + '`')
  test.end() })
