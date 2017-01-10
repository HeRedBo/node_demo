
var fn_index =  async(ctx , next) => 
{
    ctx.response.body = `
        <form action="/sigin" method="POST">
            <p>Name : <input type="text" name="name" value = "koa"></p>
            <p>Password : <input type="password" name="password"> </p>
            <p><input type="submit" value="submit"></p>
        </form>`;
}

var fn_sigin = async(ctx, next) => 
{
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

}

module.exports = {
    'GET /' : fn_index,
    'POST /sigin' : fn_sigin,
}