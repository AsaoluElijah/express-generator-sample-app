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
router.post("/new-post", (req, res) => {
  res.json({
    status: "success",
    data: "new post shared successfully",
  });
});

module.exports = router;
