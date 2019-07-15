const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');
const found = require('../controller/found');
const authBody = require('../middleware/bodyAuth');

router.post('/', authBody.isBodyValid, found.postFound);
router.get('/', jwtAuth.isTokenValid, found.getPropertyFound);

module.exports = router;
