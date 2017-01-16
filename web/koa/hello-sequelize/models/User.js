
const db = require('../db');

module.exports = db.defineModel ('users',{
    email : {
        type  : db.STRING(100),
        nique : true,
    },
    passwd : db.STRING(100),
    name   : db.STRING(60),
    gender : db.BOOLEAN
});