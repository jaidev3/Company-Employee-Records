const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  first_name: { type: "string", required: true },
  last_name: { type: "string", required: true },
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
