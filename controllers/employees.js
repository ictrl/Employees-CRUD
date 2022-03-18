const employeesDBPath = "../employeesDB.json";
const employeesDB = require(employeesDBPath);
const fs = require("fs");

//get all employees details
exports.find = async (req, res) => {
  try {
    res.json(employeesDB);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//get employee by _id
exports.findById = async (req, res) => {
  try {
    const _id = req.params._id;
    const employee = employeesDB.filter((e) => e._id == _id);

    res.json(employee[0] ?? {});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//create employee document in db
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const isEmployee = employeesDB.filter((e) => e._id == body._id);
    if (isEmployee.length)
      return res.status(400).json("Employee _id already present");
    employeesDB.push(body);
    fs.writeFile("employeesDB.json", JSON.stringify(employeesDB), (err) => {
      if (err) throw err;
      console.log("New data added");
    });

    res.json("Employee added");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//delete employee record by _id
exports.delete = async (req, res) => {
  try {
    const _id = req.params._id;

    const newDocs = employeesDB.filter((e) => e._id != _id);
    fs.writeFile("employeesDB.json", JSON.stringify(newDocs), (err) => {
      if (err) throw err;
      console.log("New data added");
    });
    res.json("Employee deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
