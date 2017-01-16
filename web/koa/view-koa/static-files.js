const path = require('path');
const mine = require('mime');
const fs   = require('mz/fs');

// url : 类似/static/
// dir : 类似__dirname +'/static'

function staticFiles(url, dir)
{
    return async(ctx, next) => 
    {
        let rpath = ctx.request.path;
        // 判断是否指定url 开头
        if(rpath.startsWith(url))
        {
            // 获取文件完整路径
            let fp = path.join(dir, rpath.substring(url.length));
            if(await fs.exists(fp))
            {
                // 查找文件的mine
                ctx.response.type = mine.lookup(rpath);
                // 读取文件内容并复制给 response.body 
                ctx.response.body = await fs.readFile(fp);
            }
            else
            {
                // 文件不存在
                ctx.response.status = 404;
            }
        }
        else
        {
            // 不是指定前缀的url 继续处理下一个 moddleware;
            await next();
        }
    };
}

module.exports = staticFiles;