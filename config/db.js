let mysql      = require('mysql');
let connexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nexiosend'
});
 
connexion.connect();

module.exports = connexion