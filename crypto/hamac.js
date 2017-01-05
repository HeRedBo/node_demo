'use static';

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update("Hello World!");
hmac.update("Hello NodeJs!");
console.log(hmac.digest('hex'));
