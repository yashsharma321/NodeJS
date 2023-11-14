const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company");
const db = mongoose.connection; // to connect with database

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Database is connected..."));
