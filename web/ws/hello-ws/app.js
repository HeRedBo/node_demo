const WebSorket = require('ws');
const WebSorketServer = WebSorket.Server;

const wss = new WebSorketServer({
    port : 3000,
});


wss.on ('connection' , function (ws) 
{
    console.log(`[SERVER] connection()`);
    ws.on('message', function(message) 
    {
        console.log(`[SERVER] Received : ${message}`);
        ws.send(`ECHO : ${message}` , (err) => 
        {
            if(err) 
            {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    });
});

console.log(`ws server started at port 3000...`);

let count = 0;
let ws = new WebSorket('ws://localhost:3000/ws/chat');

ws.on ('open' ,function () 
{
    console.log(`[CLIENT] open()`);
    ws.send('hello');
});

ws.on('message' ,function(message)
{
    console.log(`[CLIENT] Received : ${message}`);
    count ++;
    if(count > 3) 
    {
        ws.send('GoodBye!');
        ws.close();
    }
    else
    {
        setTimeout (() => 
        {
            ws.send (`hello, I am Mr No.${count}`);
        },1000);
    }
});
