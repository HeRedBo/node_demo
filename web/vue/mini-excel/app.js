const Koa        = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest       = require('./rest');

const app = new Koa();

const isProduction = process.env.NODE_ENV = 'production';

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

let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// parse reqest body 
app.use(bodyParser())

// bind .rest() for ctx 
app.use(rest.restify());

app.use(controller());
// redirect to /static/index.html:
app.use(async (ctx, next) => {
    ctx.response.redirect('/static/index.html');
});
app.listen(3000);

console.log('app started at paort 3000....');