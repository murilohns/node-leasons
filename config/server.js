module.exports = function(){
  var express = require('express');
  var app = express();

  app.set('view engine','ejs');
  app.set('views','./app/views');

  var routes = require('../app/routes/web');

  routes(app);

  app.listen(8002, function(){
    console.log("localhost:8002");
  });

};
