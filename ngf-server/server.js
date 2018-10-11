var express = require('express');
appInsights = require('applicationinsights');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 8808

var app = express();
appInsights.setup('7df6442b-0165-42d2-b0e5-84b9350cc222')
appInsights.start();

require('./expressConfig')(app);

require('./passport')();

require('./routes')(app);
app.use('/problem',function(){
    throw new Error("Something wrong")
})

app.listen(port);
console.log('Listening on port ' + port + '...');