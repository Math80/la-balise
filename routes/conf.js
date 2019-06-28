const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.1.70:8000',
  database: 'la_balise'

})

module.exports = connection;