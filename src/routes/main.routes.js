const express= require("express");
const router = express.Router();
const mainController = require("../controllers/main.controllers")

router.get("/", mainController.index)

router.get("/", function (req, res) {
    res.render("index");
});


router.get("/about", mainController.about)

router.get("/about", function (req, res) {
    res.render("about");
});


module.exports = router;