const mongoose = require("mongoose");

const productStructure = new mongoose.Schema({
  pname: { type: String, required: true },
  price: { type: String, required: true },
  qty: { type: String, required: true },
  photo: { type: String, required: true },
});

module.exports = mongoose.model("Product", productStructure);
