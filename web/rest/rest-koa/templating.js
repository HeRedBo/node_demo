const nunjucks = require('nunjucks');

function createEnv(path, opts)
{
    var 
        autoescape = opts.autoescape && true,
        noCache    = opts.noCache || false,
        watch      = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path, 
            {
                noCache : noCache,
                watch   : watch,
            }),
            {
                autoescape       : autoescape,
                throwOnUndefined : throwOnUndefined
            });

    if(opts.filters) 
    {
        for(var f in opts.filters)
        {
            env.addFilter(f, opts.filters[f]);
        }
    }

    return env;
}


function templating(path, opts)
{
    var env = createEnv(path, opts);
    return async(ctx, next) =>
    {
        // 给 ctx绑定render 函数
        ctx.render = function (view, model) 
        {
            // 把render 的内容赋值给 response.body 
            ctx.response.body = env.render(view, Object.assign({},ctx.state || {}, model || {}));
            // 设置content-Type 
            ctx.response.type = 'text/html';

        }
        // 继续处理处理请求
        await next();
    }
}


module.exports = templating;
