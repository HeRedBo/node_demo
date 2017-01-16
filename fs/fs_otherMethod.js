
var fs = require('fs');

// unlink
fs.unlink('./delete.txt', function (err) {
  if (err) throw err;
  console.log('successfully deleted delete.txt');
});

// unlinkSync
// fs.unlinkSync('/tmp/hello')
// console.log('successfully deleted /tmp/hello');

// fs.rename(path1, path2, [callback])
// Asynchronous rename(2). No arguments other than a possible exception are givento the completion callback.
// 异步调用rename(2)，重命名某个文件，除非回调函数执行过程出现了异常，否则不会传递任何参数。
// fs.renameSync(path1, path2)
