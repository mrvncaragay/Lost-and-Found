const express = require('express');
const router = express.Router();
const validator = require('../middleware/auth');
const auth = require('../controller/auth');

router.post('/', validator.isBodyValid, auth.login);

module.exports = router;
