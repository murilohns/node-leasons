var db = require('../../config/db');

module.exports = function(){
    this.all = function(){
     
     var con = db();
     con.query('select * from clientes', function(erro, resultado){
      console.log(resultado);
     }) 
  };
  return this;
}

