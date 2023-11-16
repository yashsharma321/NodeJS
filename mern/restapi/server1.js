const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company");
const db = mongoose.connection; // to connect with database

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Database is connected..."));

const cors = require("cors"); //cors stablishes trust between backend and frontend
app.use(cors()); // creating object of cors library
app.use(express.json()); //injecting .json to send and receive data in json format

// linking with empapi
const employee = require("./empapi");
app.use("/emplist", employee); // http://localhost:5555/emplist get post patch delete

// linking with productapi
const product = require("./productapi");
app.use("/productlist", product); // http://localhost:5555/productlist get post patch delete

app.listen(5555, () => console.log("Server has started..."));