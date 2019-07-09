const express = require('express');
const router = express.Router();
const user = require('../controller/users');
const jwtAuth = require('../middleware/jwtAuth');
const objIdAuth = require('../middleware/objectIdAuth');
const auth = require('../middleware/bodyAuth');
const admin = require('../middleware/admin');

router.post('/dashboard', jwtAuth.isTokenValid, [
  user.getPropAdmins,
  user.getOrgAdmins,
  user.getSoftwareAdminUsers
]);
router.get('/me', jwtAuth.isTokenValid, user.getCurrentUser);
router.get('/:id', objIdAuth.validateObjectId, jwtAuth.isTokenValid, admin.isAdmin, user.getUser);
router.post('/', auth.isBodyValid, user.postUser);
router.put(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isAdmin,
  auth.isBodyValid,
  user.updateUser
);
router.delete(
  '/:id',
  objIdAuth.validateObjectId,
  jwtAuth.isTokenValid,
  admin.isAdmin,
  user.removeUser
);

module.exports = router;
