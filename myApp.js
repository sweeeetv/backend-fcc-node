let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));
console.log("Hello World");
app.get("/", (req, res) => {
  console.log("Someone just visited the home page!");
  res.sendFile(__dirname + "/views/index.html");
});
module.exports = app;
