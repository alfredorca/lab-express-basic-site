  // imports
const express = require("express");
const app = express();

// database connection

// middlewares
app.use(express.static(__dirname));

// routes
// get, post, put, delete, patch
// http
//index route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

//run our server || server.listen();
app.listen(4000, () => {
  console.log("server started running...");
});