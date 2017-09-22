var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views','./app/views');

require('../app/routes/web')(app);
module.exports = app ;
