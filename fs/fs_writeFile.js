'use strict';
var fs = require('fs');

var data = "Hello node.js!";
fs.writeFile('ouput.txt', data, 'utf-8', function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('Ok!')
    }
})
