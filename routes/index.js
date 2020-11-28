var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    text: "Hello world, this is a sample long text",
    name: "Asaolu Elijah",
  });
});

module.exports = router;
