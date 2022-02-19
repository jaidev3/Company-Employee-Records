const connect = require("./configs/db");
const express = require("express");
const app = express();
app.use(express.json());
const userController = require("./controllers/user.controller");
const salaryController = require("./controllers/salary.controller");
const adminController = require("./controllers/admin.controller");

app.use("/user", userController);
app.use("/salary", salaryController);
app.use("/admin", adminController);

app.listen(1234, async () => {
  await connect();
  console.log("listening on port 1234");
});
