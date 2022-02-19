const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const page=+req.query.page || 1;
    const size = +req.query.size || 10;
    const skip = (page - 1) * size;
    const user = await User.find().lean().skip(skip).limit(size).exec();
    const totalPages =Math.ceil((await User.find().countDocuments())/size);


    return res.send({ user,totalPages });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "Failed" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const user = await User.findOne({ id: req.params.id}).lean().exec();

  
      
      return res.send({ user});
    } catch (err) {
      return res.status(500).json({ message: err.message, status: "Failed" });
    }
  });
module.exports = router;
