const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router     = require('koa-router')();
//const fn_router = require('koa-router');
//const router = fn_router();

const app = new Koa();
// koa 中间件

app.use(bodyParser());
// log request URL
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

router.get('/', async(ctx , next) => {
    ctx.response.body = `
        <form action="/sigin" method="POST">
            <p>Name : <input type="text" name="name" value = "koa"></p>
            <p>Password : <input type="password" name="password"> </p>
            <p><input type="submit" value="submit"></p>
        </form>`;
});

router.post('/sigin',async(ctx, next) => {
    var 
        name     = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`sigin with name : ${name} password : ${password}`);
    if(name == 'koa' && password == '1234')
    {
        ctx.response.body = `<h1>Hello ${name}!</h1>`;
    } 
    else 
    {
        ctx.response.body =`<h1>Login failed!</h1>
            <p><a href="/">Try again</a></p>
        `;
    }

});

app.use(router.routes());
// 记录处理时间
app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

// 监听端口3000
app.listen(3000);
console.log('app stared at port 3000...');