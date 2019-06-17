const express = require('express');
const router = express.Router();
const userAdmin = require('../controller/admins');
const jwtAuth = require('../middleware/jwtAuth');
const objIdAuth = require('../middleware/objectIdAuth');
const auth = require('../middleware/bodyAuth');
const admin = require('../middleware/admin');

router.get('/', userAdmin.getAdmins);
router.get('/me', jwtAuth.isTokenValid, userAdmin.getCurrentAdmin);
router.get(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isAdmin,
  userAdmin.getAdmin
);
router.post('/', jwtAuth.isTokenValid, admin.isAdmin, auth.isBodyValid, userAdmin.postAdmin);
router.put(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isAdmin,
  auth.isBodyValid,
  userAdmin.updateAdmin
);
router.delete(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isAdmin,
  userAdmin.removeAdmin
);

module.exports = router;
