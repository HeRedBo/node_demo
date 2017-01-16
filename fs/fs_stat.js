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
/**
 *
 * fs.Stats
 * Objects returned from fs.stat() and fs.lstat() are of this type.
 * fs.stat()和 fs.lstat()方法返回的对象为此类型。
 *
 * stats.isFile()
 * stats.isDirectory()
 * stats.isBlockDevice()
 * stats.isCharacterDevice()
 * stats.isSymbolicLink() (only valid with fs.lstat())stats.isSymbolicLink() （仅对fs.lstat()有效）
 * stats.isFIFO()
 * stats.isSocket()
 */
