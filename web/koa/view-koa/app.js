const Koa        = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const fs         = require('fs');
const isProduction = process.env.NODE_ENV ==='production';
const templating   = require('./templating');
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if(!isProduction)
{
    console.log(1234123);
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(bodyParser());
app.use(templating('views', 
{
    noCache : !isProduction,
    watch   : !isProduction,
}));
app.use(controller());
// 监听端口3000
app.listen(3000);
console.log('app stared at port 3000...');