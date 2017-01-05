'use static';

const crypto = require('crypto');
const hash = crypto.createHash('md5');

// hash
// 可任意多次调用update():
hash.update("Hello World!");
hash.update("Hello NodeJs!");
console.log(hash.digest('hex'));


// Hmac

const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update("Hello World!");
hmac.update("Hello NodeJs!");
console.log(hmac.digest('hex'));

//  AES
function aesEncrypt(data, key)
{
    const cipher = crypto.createCipher('aes192', key);
    var crypted  = cipher.update(data, 'utf8', 'hex');
    crypted     += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key)
{
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted  = decipher.update(encrypted, 'hex', 'utf8');
    decrypted      += decipher.final('utf8');
    return decrypted;
}


var data = 'Hello, this is a secret message!';
var key  = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);


// Diffie-Hellman D
// xiaoming's keys:
var ming      = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime     = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
var hong      = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));
