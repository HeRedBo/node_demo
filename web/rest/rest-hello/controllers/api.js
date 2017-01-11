// 存储product 列表 模拟数据库
var products = [{
    name : 'IPhone',
    price : 6900
},
{
    name : 'Kindle',
    price : 999
}];

module.exports = 
{
    'GET /api/products' : async (ctx, next) => {
        // 设置Content-Type : 
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products : products
        }
    }
};