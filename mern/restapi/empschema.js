const mongoose = require("mongoose");
const empStructure = new mongoose.Schema({
  empname: { type: String, required: true },
  dept: { type: String, required: true },
  city: { type: String, required: true },
  salary: { type: String, required: true },
});

module.exports = mongoose.model("Employee", empStructure);

//-----------FORMAT---------------
//const mongoose = require("mongoose");
//const empStructure = new mongoose.Schema({});

//module.exports = mongoose.model("Employee", empStructure); // Employee - table name
//Next we need to link this file with server.js file then we can write the API and do GET POST
