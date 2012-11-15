## network-address

get the local network address of your machine

	npm install network-address

it is easy to use

``` js
var address = require('network-address');

console.log(address());    // prints something like 192.168.3.102
console.log(address(2444)) // prints something like 192.168.3.102:2444
```
