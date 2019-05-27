const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
/* GET home page. */
router.get("/login", function(req, res, next) {
  res.render("login");
});
router.get("/register", function(req, res, next) {
  res.render("register");
});
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
router.get("/", function(req, res, next) {
  res.render("index");
});

router.post("/register", authController.register);
router.post("/login", authController.login);


module.exports = router;
