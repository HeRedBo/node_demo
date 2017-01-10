const fs = require('fs');

function addMapping (router, mapping)
{
    for( var url in mapping )
    {
        if(url.startsWith('GET '))
        {
            // 如果类型类似 'GET '
            var path =url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } 
        else if(url.startsWith('POST '))
        {
            // 如果类型类似 'POST '
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping : POST ${path}`);
        } 
        else 
        {
            // 无效的url
            console.log('invalid URL a: ${url}');
        }
    };
}

function addControllers(router)
{
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });
    for(var f of js_files)
    {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    };
}

module.exports = function(dir)
{
    let 
        controllers_dir = dir || 'controllers';
        router = require('koa-router')();
    addControllers(router , controllers_dir);
    return router.routes();
}