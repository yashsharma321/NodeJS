const mongoose = require("mongoose");
const registerStructure = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Register", registerStructure);

//-----------FORMAT---------------
//const mongoose = require("mongoose");
//const empStructure = new mongoose.Schema({});

//module.exports = mongoose.model("Employee", empStructure); // Employee - table name
//Next we need to link this file with server.js file then we can write the API and do GET POST
