'use static';

const crypto = require('crypto');
const hash = crypto.createHash('md5');
// 可任意多次调用update():
hash.update("Hello World!");
hash.update("Hello NodeJs!");
console.log(hash.digest('hex'));
