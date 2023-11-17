const express = require("express");
const router = express.Router();
module.exports = router;

// api start - this will act as a bridge between frontend and backend for Employee table

const Employee = require("./empschema");

// to fetch all employee
router.get("/", async (req, res) => {
  let allemp = await Employee.find(); //fetch all data from employee table
  res.status(201).json(allemp); // 201 - response with data
});

// to add new employee
router.post("/", async (req, res) => {
  try {
    // Create a new employee object with the provided data
    let newemp = new Employee({
      empname: req.body.empname,
      dept: req.body.dept,
      city: req.body.city,
      salary: req.body.salary,
    });

    let empinfo = await newemp.save();
    res.status(201).json(empinfo);
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.status(500).json({ error: "Failed to add new employee" });
  }s
});

// to update the record
router.patch("/", async (req, res) => {
  let empdetails = await Employee.findById(req.body.id);
  if (req.body.empname != "") {
    // to check if empname is comming from frontend
    empdetails.empname = req.body.empname;
  }
  if (req.body.dept != "") {
    empdetails.dept = req.body.dept;
  }
  if (req.body.city != "") {
    empdetails.city = req.body.city;
  }
  if (req.body.salary != "") {
    empdetails.salary = req.body.salary;
  }

  empdetails.save();
  res.status(201).json(empdetails);
});

// to delete the  record
router.delete("/:id", async (req, res) => {
  try {
    // Find the employee by ID
    let myemp = await Employee.findById(req.params.id);

    // If the employee exists, delete it
    if (myemp) {
      await myemp.deleteOne(); // Wait for the deletion to complete
      let msg = { info: "Record Deleted Successfully !" };
      return res.status(201).json(msg);
    } else {
      // If the employee doesn't exist, return an error message
      return res.status(404).json({ error: "Employee not found" });
    }
  } catch (err) {
    // Handle any errors that occur during the deletion process
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
