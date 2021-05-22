const express = require("express");
const app = express();
const mysql = require('mysql');


PORT = 8084;

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'funddb'
});

  
app.get("/", (req, res) => {

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });
  res.send('hello KK');
});
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));