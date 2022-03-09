var express = require("express");
var router = express.Router();

const { usersController } = require("../controllers");

// * POST /users/login
router.post("/login", usersController.login.post);

// * POST /users/logout
router.post("/logout", usersController.logout.post);

// * get /users/userinfo
router.get("/userinfo", usersController.userinfo.get);

// * PUT /users/userinfo
router.put("/userinfo", usersController.userinfo.put);

// * POST /users/register
router.post("/register", usersController.register.post);
// * POST /users/delete
router.post("/remove", usersController.remove.delete);

module.exports = router;
