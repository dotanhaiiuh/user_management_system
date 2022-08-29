var express = require("express");
var router = express.Router();
var controller = require("../controllers/user_controller");

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/view/:id", controller.view);

router.get("/create", controller.create_get);

router.post("/create", controller.create_post);

router.get("/update/:id", controller.update_get);

router.post("/update/:id", controller.update_post);

router.get("/delete/:id", controller.delete);

module.exports = router;