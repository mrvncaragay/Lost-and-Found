const express = require('express');
const router = express.Router();
const found = require('../controller/found');

router.post('/', found.postFound);

module.exports = router;
