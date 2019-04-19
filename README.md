Requirements:
 * Node installed
 * Node package manager installed

Steps to reproduce this error

Run these commands
> `npm i`
> `node index.js`

Errors:
```
{ MongoNetworkError: connection 0 to 159.203.167.38:27017 timed out
    at Socket.<anonymous> (C:\CitiLogics\mongoose-nodejs\node_modules\mongodb-core\lib\connection\connection.js:259:7)
    at Object.onceWrapper (events.js:313:30)
    at emitNone (events.js:106:13)
    at Socket.emit (events.js:208:7)
    at Socket._onTimeout (net.js:407:8)
    at ontimeout (timers.js:475:11)
    at tryOnTimeout (timers.js:310:5)
    at Timer.listOnTimeout (timers.js:270:5)
  name: 'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]: {} }
```
