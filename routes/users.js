const express = require('express');
const router = express.Router();
const user = require('../controller/users');
const jwtAuth = require('../middleware/jwtAuth');
const authBody = require('../middleware/bodyAuth');

router.get('/', authBody.isBodyValid, user.getUsers);
router.get('/me', jwtAuth.isTokenValid, user.getCurrentUser);
// router.get('/:id', user.index);
router.post('/', authBody.isBodyValid, user.postUser);
// router.put('/:id', user.index);
// router.delete('/:id', user.index);

module.exports = router;
