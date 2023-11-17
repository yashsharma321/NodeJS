const express = require("express");
const router = express.Router();
module.exports = router;

const Register = require("./registerschema");

router.get("/", async (req, res) => {
  try {
    const allregisters = await Register.find(); // Fetch all data from the register table
    res.status(200).json(allregisters); // Respond with the retrieved data
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve registered user data" });
  }
});

router.post("/", async (req, res) => {
  try {
    let newregister = new Register({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    let registerinfo = await newregister.save();
    res.status(201).json(registerinfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add new user" });
  }
});
