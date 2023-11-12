const express = require("express"); //calling express framework
const app = express(); // creating object of express
const cors = require("cors"); // calling cors origin library
app.use(cors()); // creating object of cors library
app.use(express.json()); //injecting .json to send and receive data in json format

app.get("/", function (req, res) {
  res.send("<h1> The Server is Running </h1>");
  res.end();
});

app.get("/booklist", function (req, res) {
  let booklist = ["html", "css", "react", "javascript", "node", "php"];
  res.send(booklist); 
  res.end();
});

app.get("/allbook", function (req, res) {
  let booklist = [
    { name: "HTML", price: 300, author: "Ganesh" },
    { name: "CSS", price: 200, author: "Mahesh" },
    { name: "Javascript", price: 300, author: "Damodar" },
    { name: "React", price: 400, author: "Raj" },
    { name: "NodeJS", price: 100, author: "Suresh" },
    { name: "Python", price: 600, author: "Ganesh" },
  ];
  res.send(booklist); 
  res.end();
});

app.listen(1234, function () {
  console.log("The server is live...");
});

// http://localhost:2222
