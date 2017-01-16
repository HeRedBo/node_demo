'use strict';

var fs = require('fs');

fs.stat('sample.txt', function(err, stat)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        // 是否是文件
        console.log('isFile: ' + stat.isFile());
        //是否是目录
        console.log('isDirectory: ' + stat.isDirectory());

        if(stat.isFile())
        {
            // 文件大小
            console.log('size: ' + stat.size);
            // 创建时间
            console.log('create time :' +stat.birthtime);
            console.log('modify time :' + stat.mtime);
        }
    }
});
