function pad(number, length) {
  var string = number.toString()
  var stringLength = string.length 
  return (
    stringLength < length ?
      ( new Array(length - stringLength + 1).join('0') + string ) :
      string) }

function toISOStringWithOffset(date) {
  var signedOffset = -(date.getTimezoneOffset())
  var absoluteOffset = Math.abs(signedOffset)
  return (
    // Date
    ( pad(date.getFullYear(), 4) + '-' +
      pad(date.getMonth() + 1, 2) + '-' +
      pad(date.getDate(), 2) ) +
    // Time
    ( 'T' +
      pad(date.getHours(), 2) + ':' +
      pad(date.getMinutes(), 2) + ':' +
      pad(date.getSeconds(), 2) ) +
    // Offset
    ( ( signedOffset >= 0 ? '+' : '-' ) +
      pad(absoluteOffset / 60, 2) +
      pad(absoluteOffset % 60, 2) )) }

module.exports = toISOStringWithOffset
