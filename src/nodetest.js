var jwt = require('jsonwebtoken');

var token = jwt.sign({username:"ado"},'sec');

console.log(token)