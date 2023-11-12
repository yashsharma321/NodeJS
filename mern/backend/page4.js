let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/json" });
    let booklist = [
      { name: "HTML", price: 300, author: "Ganesh" },
      { name: "CSS", price: 200, author: "Mahesh" },
      { name: "Javascript", price: 300, author: "Damodar" },
      { name: "React", price: 400, author: "Raj" },
      { name: "NodeJS", price: 100, author: "Suresh" },
      { name: "Python", price: 600, author: "Ganesh" },
    ];

    let jsondata = JSON.stringify(booklist);

    res.write(jsondata);

    res.end();
  })
  .listen(1111);
