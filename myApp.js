let express = require("express");
let app = express();

console.log("Hello World");
app.get("/", (req, res) => {
  console.log("Someone just visited the home page!");
  res.send("Hello Express");
});
module.exports = app;
