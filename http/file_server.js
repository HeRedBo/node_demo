'use strict';

var
    fs   = require('fs'),
    url  = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '');

console.log('Static root dir : ' + root);

var server = http.createServer (function(request, response)
{
    // 获取URl的path 类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    var filepath = url.join(root, pathname);
    // 获取文件状态
    fs.stat(filepath, function(err, stats)
    {
        if(!err && stats.isFile())
        {
            // 没有出错且文件存在
            console.log('200' + request.url);
            // 发送 200 响应
            response.writeHead(200);
            //将文件流导向response
           fs.createReadStream(filepath).pipe(response);
        }
        else
        {
            // 出错 或者文件不存在
            console.log('404' + request.url);
            // 发送404 响应
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
