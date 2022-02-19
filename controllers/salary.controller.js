const express = require("express");
const router = express.Router();
const Salary = require("../models/salary.model");


router.post("/", async (req, res) => {
  try {
    const salary = await Salary.create(req.body);
    return res.send(salary);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const salary = await Salary.find({}).populate("userId").lean().exec();
    console.log(salary);
    return res.send({ salary });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "Failed" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const salary = await Salary.find({}).populate("userId").lean().exec();
      console.log(salary);
      return res.send({ salary });
    } catch (err) {
      return res.status(500).json({ message: err.message, status: "Failed" });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const salary = await Salary.find({}).sort({}).populate("userId").lean().exec();
      console.log(salary);
      return res.send({ salary });
    } catch (err) {
      return res.status(500).json({ message: err.message, status: "Failed" });
    }
  });
module.exports = router;
