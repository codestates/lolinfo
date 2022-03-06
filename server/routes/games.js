var express = require("express");
var router = express.Router();

const { gamesController } = require("../controllers");

// * GET /games/match
router.get("/match", gamesController.match.get);

// * GET /games/player
router.get("/player", gamesController.player.get);

// * GET /games/version
router.get("/version", gamesController.version.get);

module.exports = router;
