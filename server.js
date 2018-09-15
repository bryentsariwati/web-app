var express = require('express');
var app = express();

var port = 8080;

app.get('*', function (req, res) {
   res.sendfile('./app/index.html');

})

app.listen(port); 
console.log('\nServer hosted on port ' + port);
exports = module.exports = app;