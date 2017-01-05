'use strict';

var http = require("http");

var server = http.createServer(function(request, response)
{
    console.log(request.method + ':' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-type' : 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello World!<h1>');
});
server.listen(8080);
console.log("Server is running at http://127.0.0.1:8080");
