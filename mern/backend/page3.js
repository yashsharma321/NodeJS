let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/json" });

    let booklist = ["html", "css", "react", "javascript", "node", "php"];
    res.write(JSON.stringify(booklist)); // convert from array to json
    res.end();
  })
  .listen(1111);
