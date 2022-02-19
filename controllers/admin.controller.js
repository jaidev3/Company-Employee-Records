const express = require("express");
const router = express.Router();
const Admin = require("../models/admin.model");

router.post("/", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    return res.send(admin);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const admin = await Admin.find().lean().exec();
    console.log(admin);
    return res.send({ admin });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "Failed" });
  }
});
module.exports = router;
