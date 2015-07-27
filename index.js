function repeat(string, count) {
  if (String.prototype.repeat) {
    return string.repeat(count) }
  else {
    if (count === 1) {
      return string }
    else if (count === 2) {
      return string + string }
    else {
      return new Array(count + 1).join(string) } } }

function pad(number, length) {
  var string = number.toString()
  var stringLength = string.length 
  return (
    stringLength < length ?
      repeat('0', length - stringLength) + string :
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
