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

app.get("/mydata", function (req, res) {
  let user = ["Ganesh", "Keshav", "Narayan", "Madhav", "Krishna", "Govinda"];
  let city = [
    "Bangalore",
    "Siliguri",
    "Darjeeling",
    "Sikkim",
    "Gangtok",
    "Noida",
    "Kolkata",
    "Punes",
  ];
  let book = ["html", "css", "react", "javascript", "node", "php"];

  let alldata = { userlist: user, citylist: city, booklist: book };
  // We can covert alldata to JSON before sending it to the frontend

  let jsondata = JSON.stringify(alldata);
  res.write(jsondata);
  res.end();
});

const fs = require("fs"); //file system module
app.get("/messagelist", function (req, res) {
  fs.readFile("message.txt", function (error, data) {
    if (error) {
      res.send("Error in File reading...");
      res.end();
    }
    res.send(data);
    res.end();
  });
});

app.post("/newmessage", function (req, res) {
  let msg = "\n" + req.body.message; //capture the new message sent by react
  // res.send(msg + " " + "From Nodejs"); //sending back message as response

  let time = new Date().toLocaleString();
  msg = msg + " - Posted at : " + time;
  fs.appendFile("message.txt", msg + "#", function (error) {
    res.send("Message Received Successfully !");
    res.end();
  });
});

app.get("/clearall", function (req, res) {
  fs.writeFile("message.txt", "", function (error) {
    res.send("Message Deleted Successfully !");
    res.end();
  });
});

app.listen(1234, function () {
  console.log("The server is live...");
});

// http://localhost:2222
