const mongoose = require("mongoose");
const cartStructure = new mongoose.Schema({
  pname: { type: String, required: true },
  qty: { type: String, required: true },
  price: { type: String, required: true },
  photo: { type: String, required: true },
  userid: { type: String, required: true },
});

module.exports = mongoose.model("Cart", cartStructure);
