const express = require("express");
const router = express.Router();
module.exports = router;

const Order = require("./orderschema");
const Cart = require("./cartschema");

// to fetch all order items
router.get("/", async (req, res) => {
  try {
    const orderitems = await Order.find(); // Fetch all data from the order table
    res.status(200).json(orderitems); // Respond with the retrieved data
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve order data" });
  }
});

router.post("/", async (req, res) => {
  try {
    let orderitem = new Order({
      fullname: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      city: req.body.city,
      address: req.body.address,
      userid: req.body.userid,
      orderdata: req.body.itemlist,
    });

    let orderinfo = await orderitem.save();
    await Cart.deleteMany(); // DELETE ALL DATA FROM CART
    res.status(201).json({ msg: "Your Order Placed Successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to place order." });
  }
});
