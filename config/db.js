var mysql = require('mysql');

var db = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'murilo',
    password: 'simplespass', 
    database: 'nodejs_course'

  })
};

module.exports = db;
