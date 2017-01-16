'use strict';
//var buf = new Buffer(10);
//console.log(buf)

//var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("www.runoob.com", "utf-8");
//console.log(buf);
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");
console.log("写入字节数 : "+  len);


// buffer 语法
// buf.write(string[, offset[, length]][, encoding])
//
// 参数
// 参数描述如下：
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
