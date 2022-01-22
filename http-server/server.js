const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 7000;
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname + "./../dist"));
const test1Router = require("./routes/test1Router");
const test2Router = require("./routes/test2Router");

app.use("/test1route", test1Router);
app.use("/test2route", test2Router);

app.get("*", function (request, response) {
  if (request.path.match(/\/[^\/.]*$/)) {
    response.sendFile(path.resolve(__dirname + "./../dist", "index.html"));
  }
});

console.log("Listening on port: " + PORT);
app.listen(PORT);
