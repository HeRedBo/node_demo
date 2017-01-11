const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();


// parse request body;
app.use(bodyParser());
// add Controller;
app.use(controller());
app.listen(3000);

console.log('app started at paort 3000....');