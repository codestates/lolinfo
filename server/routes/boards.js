var express = require("express");
var router = express.Router();

const { boardsController } = require("../controllers");

// * POST /boards
router.post("/", boardsController.newBoard);
router.get("/", boardsController.listBoard);
router.delete("/", boardsController.deleteBoard);

module.exports = router;
