module.exports = 
{
    'POST /signin' : async(ctx, next) => 
    {
        var 
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
            if(email == 'admin@example.com' && password == '123456')
            {
                // 登录成功
                console.log('Signin OK!');
                ctx.render('signin-ok.html',{
                    title : 'sign In Ok',
                    name : 'Mr node'
                });
            }
            else
            {
                console.log('sigin failed!');
                ctx.render('signin-failed.html', {
                    title : 'Sign In failed!'
                });
            }
    },
}