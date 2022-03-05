var express = require('express');
var router = express.Router();

const { infoController } = require('../controllers');

// * GET /info/match
router.get('/match', infoController.match.get);

// * GET /info/player
router.get('/player', infoController.player.get);

// * GET /info/version
router.get('/version', infoController.version.get);

module.exports = router;