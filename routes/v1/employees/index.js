const express = require("express");
const router = express.Router();
const employees = require("../../../controllers/employees");

//get all employees details
router.get("/", employees.find);

//get employee by id
router.get("/:_id", employees.findById);

//create employee document in db
router.post("/", employees.create);

//delete employee record by id
router.delete("/:_id", employees.delete);

module.exports = router;
