var register = require('babel-core/register');
register({
    presets : ['stage-3'],
});

const model = require('./model');
model.sync();

console.log('init db ok');
// 如果需要创建表 需要将如下注释
process.exit(0);

