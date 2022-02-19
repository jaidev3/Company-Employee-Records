const mongoose = require("mongoose");
// const user = require("../models/user.model");


const salarySchema = new mongoose.Schema({
  salary: { type: "Number", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", },
});

const Salary = mongoose.model("salary", salarySchema);
module.exports = Salary;
