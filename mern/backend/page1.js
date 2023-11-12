let http = require("http");
http
  .createServer(function (req, res) {
    console.log("server is running");
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> Welcome To Node </h1>");
    res.write("<h2> Welcome Back </h2>");
    res.end();
  })
  .listen(1111);
