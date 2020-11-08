const express = require("express");
const myApp = express();
const port = 4000;

myApp.get("/name/:user_name", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  res.send(
    "<html><body>" +
      "<h1>Oh " +
      req.params.user_name +
      "! </h1>" +
      "</body></html>"
  );
});

myApp.get("*", function (req, res) {
  res.end("Hello World");
});

myApp.listen(3000, function (err) {
  if (err) console.log("server not running");
  else console.log("Calling app.listen's callback function.");
});

myApp.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
