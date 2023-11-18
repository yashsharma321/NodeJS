const express = require("express");
const router = express.Router();
module.exports = router;

const Cart = require("./cartschema");

// to fetch all cart items
router.get("/", async (req, res) => {
  try {
    const cartitems = await Cart.find(); // Fetch all data from the cart table
    res.status(200).json(cartitems); // Respond with the retrieved data
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve cart data" });
  }
});

// to add new item
router.post("/", async (req, res) => {
  try {
    let newitem = new Cart({
      pname: req.body.pname,
      qty: req.body.qty,
      price: req.body.price,
      photo: req.body.photo,
      userid: req.body.userid,
    });

    let cartinfo = await newitem.save();
    res.status(201).json({ msg: "Item added in your cart." });
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.status(500).json({ error: "Failed to add item in the cart." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let myproduct = await Cart.findById(req.params.id);
    if (myproduct) {
      await myproduct.deleteOne(); // Wait for the deletion to complete
      let msg = { msg: "Record Deleted Successfully !" };
      return res.status(200).json(msg);
    } else {
      return res.status(404).json({ msg: "Product not found" });
    }
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});
