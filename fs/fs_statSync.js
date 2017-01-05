'use static';

var fs = require('fs');

try
{
    var stat = fs.statSync('sample.txt');
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
catch(err)
{
    console.log(err);
}
