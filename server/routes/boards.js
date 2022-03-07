var express = require('express');
var router = express.Router();

const { boardsController } = require('../controllers');

// * POST /boards
router.post('/', boardsController.newPost);

module.exports = router;