
module.exports = {
    APIError : function (code , message)
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
                // 绑定rest()方法
                ctx.rest = (data) => 
                {
                    ctx.response.type = 'application/json';
                    ctx.response.body = data;
                }
                await next();
            } 
            else
            {
                await next();
            }
        } 
    }
}