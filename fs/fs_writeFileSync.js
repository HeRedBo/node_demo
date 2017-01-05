'use strict';
// 同步写入方法
var fs = require('fs');

var data = 'Hello Node.js';
try
{
    fs.writeFileSync('ouput2.txt',data)
}
catch(err)
{
    console.log(err);
}
