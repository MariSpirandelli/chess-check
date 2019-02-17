const express = require('express');
const router = express.Router();
const controller = require('../controllers/knightMoveCheckController');

router.get('/:position', controller.get);

module.exports = router;