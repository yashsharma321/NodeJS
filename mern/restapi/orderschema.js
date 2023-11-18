const mongoose = require("mongoose");
const orderStructure = new mongoose.Schema({
  fullname: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  userid: { type: String, required: true },
  orderdata: { type: Object, required: true },
});

module.exports = mongoose.model("Order", orderStructure);
