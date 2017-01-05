'use strict';
// 同步读取文件信息
var fs = require('fs');
try 
{
    var data = fs.readFileSync('sample2.txt', 'utf-8');
    console.log(data);
}
catch (err) 
{
    console.error(err);
}

