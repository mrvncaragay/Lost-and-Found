const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');
const lost = require('../controller/lost');
const authBody = require('../middleware/bodyAuth');


router.post('/', authBody.isBodyValid, lost.postLost);
router.get('/', jwtAuth.isTokenValid, lost.getPropertyLost);

module.exports = router;
