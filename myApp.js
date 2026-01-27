require("dotenv").config();
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
console.log("Hello World");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

//this line if not for human, but for HTML to find the css file
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("Someone just visited the home page!");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  },
);
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app
  .route("/name")
  .get((req, res) => {
    const f_name = req.query.first;
    const l_name = req.query.last;
    res.json({ name: f_name + " " + l_name });
  })
  .post((req, res) => {
    console.log(req.body);
    const f_name = req.body.first;
    const l_name = req.body.last;
    res.json({ name: f_name + " " + l_name });
  });

module.exports = app;
