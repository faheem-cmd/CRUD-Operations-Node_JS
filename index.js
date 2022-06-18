const express = require("express");
var mongoose = require("mongoose");
var app = express();
//Route
app.get("/", function (req, res) {
  res.send("hello world");
});

const router = require("./routes/emp");
app.use("/emp", router);
//MongoDB connection
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
//Server
app.listen(8000, function () {
  console.log("Server is Up");
});
