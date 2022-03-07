var express = require('express');
var router = express.Router();

const { boardsController } = require('../controllers');

// * POST /boards
router.post('/', boardsController.newPost);
router.get('/', boardsController.listPost);
router.delete('/', boardsController.deletePost);

module.exports = router;