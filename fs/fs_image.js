'use strict';
// 二进制文件读取
var fs = require('fs');
fs.readFile('xiaoliao.jpg', function(err, data)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data); // now data is a buffer Obcject
        var text = data.toString('utf-8');
        console.log(text);
        console.log(data.length + ' bytes');
    }
})
