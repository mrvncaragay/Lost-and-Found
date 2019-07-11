const express = require('express');
const router = express.Router();
const data = require('../controller/datas');
const jwtAuth = require('../middleware/jwtAuth');
const objIdAuth = require('../middleware/objectIdAuth');
const auth = require('../middleware/bodyAuth');
const admin = require('../middleware/admin');

router.post('/organization', jwtAuth.isTokenValid, data.getOrgData);
router.post('/property', jwtAuth.isTokenValid, data.getPropData);

module.exports = router;
