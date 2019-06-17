const express = require('express');
const router = express.Router();
const authBody = require('../middleware/bodyAuth');
const auth = require('../controller/auth');

router.post('/', authBody.isBodyValid, auth.login);

module.exports = router;
