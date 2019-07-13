const express = require('express');
const router = express.Router();
const lost = require('../controller/lost');

router.post('/', lost.postLost);

module.exports = router;
