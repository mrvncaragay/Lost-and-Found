const express = require('express');
const router = express.Router();
const organization = require('../controller/organizations');
const jwtAuth = require('../middleware/jwtAuth');
const objIdAuth = require('../middleware/objectIdAuth');
const auth = require('../middleware/bodyAuth');
const admin = require('../middleware/admin');

router.get('/', jwtAuth.isTokenValid, organization.index);
router.get(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isSwAdmin,
  organization.getOrganization
);
router.post(
  '/',
  jwtAuth.isTokenValid,
  admin.isSwAdmin,
  auth.isBodyValid,
  organization.postOrganization
);
router.put(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isSwAdmin,
  auth.isBodyValid,
  organization.updateOrganization
);

router.delete(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isSwAdmin,
  organization.removeOrganization
);

module.exports = router;
