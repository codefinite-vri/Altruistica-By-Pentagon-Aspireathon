const express = require("express");
const app = express();
PORT = 8082;
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));