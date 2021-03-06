var repeat = require('string-repeat')

module.exports = function toISOStringWithOffset (date) {
  var signedOffset = -(date.getTimezoneOffset())
  var absoluteOffset = Math.abs(signedOffset)
  return (
    // Date
    (
      pad(date.getFullYear(), 4) + '-' +
      pad(date.getMonth() + 1, 2) + '-' +
      pad(date.getDate(), 2)
    ) +
    // Time
    (
      'T' +
      pad(date.getHours(), 2) + ':' +
      pad(date.getMinutes(), 2) + ':' +
      pad(date.getSeconds(), 2)
    ) +
    // Offset
    (
      (signedOffset >= 0 ? '+' : '-') +
      pad(absoluteOffset / 60, 2) +
      pad(absoluteOffset % 60, 2)
    )
  )
}

function pad (number, length) {
  var string = number.toString()
  var stringLength = string.length
  return stringLength < length
  ? repeat('0', length - stringLength) + string
  : string
}
