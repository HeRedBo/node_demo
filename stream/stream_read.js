'use strict';

var fs = require('fs');

//打开一个流
var rs = fs.createReadStream('sample.txt','utf-8');
rs.setEncoding('UTF8');
rs.on('data',function(chunk)
{
    console.log("DATA:");
    console.log(chunk);
});

// 处理流事件 --> data, end, and error
rs.on('end',function()
{
    console.log("END");
})

rs.on('error',function(err)
{
    console.log('ERROR : ' + err);
});
