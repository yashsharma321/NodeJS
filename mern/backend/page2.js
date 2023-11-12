let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1> Book List  </h1>");

    let booklist = ["html", "css", "react", "javascript", "node", "php"];
    booklist.map((bookname, index) => {
      res.write("<p>" + bookname + "</p>");
    });

    res.end();
  })
  .listen(1111);
