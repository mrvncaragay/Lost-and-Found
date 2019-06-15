const express = require('express');
const router = express.Router();
const homepage = require('../controller/homepage');

router.get('/', homepage.index);

module.exports = router;
