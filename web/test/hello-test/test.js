
const assert = require('assert');
const sum = require('./hello');

console.log(assert.strictEqual(sum(),0));
console.log(assert.strictEqual(sum(1),1));
console.log(assert.strictEqual(sum(1,2),3));
console.log(assert.strictEqual(sum(1,2,3),6));