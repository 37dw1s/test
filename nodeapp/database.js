var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "ttsql",
    password: "Qswa1w2q!",
    database: "db"
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;