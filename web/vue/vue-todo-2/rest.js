module.exports = {
    APIError : function (code, message)
    {
        this.code    = code || 'internal:unknown_error';
        this.message = message || '';
    },
    restify : (pathPrefix) => 
    {
        // rest API 前缀 默认是/api/
        pathPrefix = pathPrefix || '/api/';
        return async (ctx, next) => 
        {
            // 是否是 Rest API 前缀
            if(ctx.request.path.startsWith(pathPrefix))
            {
                console.log(`Process API ${ctx.request.method} ${ctx.request.url}...`);
                // 绑定rest()方法
                ctx.rest = (data) => 
                {
                    ctx.response.type = 'application/json';
                    ctx.response.body = data;
                }
                try
                {
                    await next();
                }
                catch(e)
                {
                    console.log('Process API error....');
                    ctx.response.status = 400;
                    ctx.response.type = 'application/json';
                    ctx.response.body = {
                        code    : e.code || 'internal:unknow_error',
                        message : e.message
                    }
                } 
            } 
            else
            {
                await next();
            }
        } 
    }
}