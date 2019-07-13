const express = require('express');
const router = express.Router();
const inquiry = require('../controller/inquiry');

router.post('/', inquiry.postInquiry);

module.exports = router;
