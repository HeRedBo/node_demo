// store products as database;

var id = 0;

function nextId()
{
    id ++;
    return '0' + id;
}

function product(name,manufaturer, price)
{
    this.id          = nextId();
    this.name        = name;
    this.manufaturer = manufaturer;
    this.price       = price;
}

var products = [
    new product('meizu pro6 Plus','Meizu',2999),
    new product('Apple 6','Apple',6800),
    new product('Apple mac book','Apple',1400)
];

module.exports = {
    
    getProducts: () => 
    {
        return products;
    },

    getProduct : (id) =>
    {
        var i;
        for(i = 0; i< products.length; i ++)
        {
            if(products[i].id === id)
            {
                return products[i];
            }
        }
        return null;
    },

    createProduct : (name, manufaturer, price) => 
    {
        var p = new product(name, manufaturer, price);
        products.push(p);
        return p;
    },

    deleteProduct : (id) => 
    {
        var 
            index = -1,
            i;
        for(i = 0; i <= products.length; i++)
        {
            if(products[i].id === id)
            {
                index = i;
                break;
            }
        }

        if(index >= 0)
        {
            // remove products[index]:
            return products.splice(index,1)[0];
        }
        return  null;
    }
}