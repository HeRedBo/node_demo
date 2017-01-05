'use strict';
// Node.js内置的fs模块就是文件系统模块，负责读写文件。
var fs  = require('fs');

fs.readFile('sample.txt','utf-8', function(err,data)
{
    if(err) 
    {
        console.log(err);
    } 
    else
    {
        console.log(data);
    }
})