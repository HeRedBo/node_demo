const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const fs = require('fs');
//const fn_router = require('koa-router');
//const router = fn_router();
const app = new Koa();

// 导入controller middleware
// koa 中间件
app.use(bodyParser());
// 使用 middleware
app.use(controller());

// log request URL
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

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