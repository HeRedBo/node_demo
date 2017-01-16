const model = require('./model');

let 
    Pet = model.Pet,
    User = model.User;

(async () => {
    var userData  = {
        name : 'John',
        gender : false,
        email : 'john' + Date.now() + '@garfield.pet',
        passwd : 'hahaha'
    }
    var user = await  User.create (userData);
    console.log('created: ' + JSON.stringify(user));
    var catData = {
        ownerId : user.id,
        name : 'Garfield',
        gender : false,
        birth : '2016-01-08'
    }
    var cat = await Pet.create (catData);
    console.log('Created : ' + JSON.stringify(cat));
})();
