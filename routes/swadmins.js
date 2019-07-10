const express = require('express');
const router = express.Router();
const swadmin = require('../controller/swadmins');
const jwtAuth = require('../middleware/jwtAuth');
const objIdAuth = require('../middleware/objectIdAuth');
const auth = require('../middleware/bodyAuth');
const admin = require('../middleware/admin');

router.post('/data', jwtAuth.isTokenValid, swadmin.getOrgData);

module.exports = router;
