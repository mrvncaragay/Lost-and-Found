const express = require('express');
const router = express.Router();
const organization = require('../controller/organizations');
const jwtAuth = require('../middleware/jwtAuth');
const auth = require('../middleware/auth');

router.get('/', auth.isBodyValid, organization.index);
// router.get('/:id', organization.index);
// router.post('/', organization.index);
// router.put('/:id', organization.index);
// router.delete('/:id', organization.index);

module.exports = router;
