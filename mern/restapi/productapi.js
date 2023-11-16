const express = require("express");
const router = express.Router();
module.exports = router;

const Product = require("./productschema");

router.get("/", async (req, res) => {
  let allproduct = await Product.find();
  res.send(201).json(allproduct);
});

router.post("/", async (req, res) => {
  let newproduct = new Product({
    pname: req.body.pname,
    price: req.body.price,
    qty: req.body.qty,
    photo: req.body.photo,
  });

  let productinfo = await newproduct.save();
  res.send(201).json(productinfo);
});

router.patch("/", async (req, res) => {
  let productdetails = await Product.findById(req.body.id);
  if (req.body.pname != "") {
    // to check if pname is comming from frontend
    productdetails.pname = req.body.pname;
  }
  if (req.body.price != "") {
    productdetails.price = req.body.price;
  }
  if (req.body.qty != "") {
    productdetails.qty = req.body.qty;
  }
  if (req.body.photo != "") {
    productdetails.photo = req.body.photo;
  }

  productdetails.save();
  res.status(201).json(productdetails);
});

router.delete("/:id", async (req, res) => {
  let myproduct = await Product.findById(req.params.id);
  myproduct.deleteOne();
  let msg = { info: "Record Deleted Successfully !" };
  res.status(201).json(msg);
});
