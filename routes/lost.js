const express = require('express');
const router = express.Router();
const lost = require('../controller/lost');
const authBody = require('../middleware/bodyAuth');


router.post('/', authBody.isBodyValid, lost.postLost);

module.exports = router;
