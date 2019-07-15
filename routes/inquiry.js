const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');
const inquiry = require('../controller/inquiry');
const authBody = require('../middleware/bodyAuth');

router.post('/', authBody.isBodyValid, inquiry.postInquiry);
router.get('/', jwtAuth.isTokenValid, inquiry.getPropertyInquiry);

module.exports = router;
