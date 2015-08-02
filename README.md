toISOString() with timezone offset, like `date --iso-8601=seconds`

```javascript
var toISOStringWithOffset = require('to-iso-string-with-offset')
toISOStringWithOffset(new Date()) // => YYYY-MM-DDTHH:MM:MM+OOOO
```
