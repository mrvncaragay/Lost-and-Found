const express = require('express');
const router = express.Router();
const found = require('../controller/found');
const authBody = require('../middleware/bodyAuth');

router.post('/', authBody.isBodyValid, found.postFound);

module.exports = router;
