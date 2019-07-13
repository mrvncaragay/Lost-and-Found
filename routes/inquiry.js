const express = require('express');
const router = express.Router();
const inquiry = require('../controller/inquiry');
const authBody = require('../middleware/bodyAuth');

router.post('/', authBody.isBodyValid, inquiry.postInquiry);

module.exports = router;
