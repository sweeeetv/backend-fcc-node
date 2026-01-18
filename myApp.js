let express = require("express");
let app = express();

console.log("Hello World");
app.get("/", (req, res) => {
  res.send("Hello from Azure! The wiring is fixed.");
});
module.exports = app;
