const express = require("express");
const router = express.Router();
const task = require("../controllers/task.js");
const taskModel = require("../models/task")

const ensureAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
};

/* GET users listing. */
router.get("/", (req, res, next) =>
    taskModel.find({}).then(tasks => res.render("user", { tasks }))
);

router.get("/protected", ensureAuthenticated, function(req, res, next) {
  res.render("user", { user: req.user });
});
// router.get("/create",  function(req, res, next) {
//   res.render("create");
// });
router.use("/postuser", task.postUser);
router.use("/create", task.addUser);
router.use("/user", task.getUser);

module.exports = router;
