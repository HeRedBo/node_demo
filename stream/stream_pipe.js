'use static';

var fs = require('fs');
//创建可读流
var readStream = fs.createReadStream('ouput.log');
// 创建可写流
var writeStream = fs.createWriteStream('write.txt');

// 管道操作
readStream.pipe(writeStream);
console.log('程序执行完毕');
