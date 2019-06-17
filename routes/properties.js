const express = require('express');
const router = express.Router();
const property = require('../controller/properties');
const jwtAuth = require('../middleware/jwtAuth');
const objIdAuth = require('../middleware/objectIdAuth');
const auth = require('../middleware/bodyAuth');
const admin = require('../middleware/admin');

router.get('/', property.index);
router.get(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isOSAdmin,
  property.getProperty
);
router.post('/', jwtAuth.isTokenValid, admin.isOSAdmin, auth.isBodyValid, property.postProperty);

router.put(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isOSAdmin,
  auth.isBodyValid,
  property.updateProperty
);

router.delete(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isOSAdmin,
  property.removeProperty
);

module.exports = router;
