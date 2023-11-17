const express = require("express");
const router = express.Router();
module.exports = router;

const Product = require("./productschema");

router.get("/", async (req, res) => {
  try {
    let allproduct = await Product.find();
    res.status(200).json(allproduct); // Respond with the retrieved data
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product data" });
  }
});

router.get("/:pname", async (req, res) => {
  try {
    let allproduct = await Product.find({pname : req.params.pname});
    res.status(200).json(allproduct); // Respond with the retrieved data
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product data" });
  }
});

router.post("/", async (req, res) => {
  try {
    let newproduct = new Product({
      pname: req.body.pname,
      price: req.body.price,
      qty: req.body.qty,
      photo: req.body.photo,
    });

    let productinfo = await newproduct.save();
    res.status(201).json(productinfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add new product" });
  }
});

router.patch("/", async (req, res) => {
  try {
    const productdetails = await Product.findById(req.body.id);
    if (!productdetails) {
      return res.send(404).json({ error: "Product not found" });
    }
    if (req.body.pname) {
      productdetails.pname = req.body.pname;
    }
    if (req.body.price) {
      productdetails.price = req.body.price;
    }
    if (req.body.qty) {
      productdetails.qty = req.body.qty;
    }
    if (req.body.photo) {
      productdetails.photo = req.body.photo;
    }
    await productdetails.save();
    res.status(200).json(productdetails);
  } catch (error) {
    res.status(500).json({ error: "Failed to update record" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let myproduct = await Product.findById(req.params.id);
    if (myproduct) {
      await myproduct.deleteOne(); // Wait for the deletion to complete
      let msg = { info: "Record Deleted Successfully !" };
      return res.status(200).json(msg);
    } else {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
