const express = require('express');
const userController = require('./controllers/userController');
const userMiddleware = require('./middleware/userMiddleware');

const router = express.Router();

router.get('/', userController.listUser, userController.getUserByEmail);

router.post(
  '/',
  [
    userMiddleware.checkIdentity,
    userMiddleware.checkEmail,
    userMiddleware.checkPseudonyme,
    userController.addUser,
  ],
);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
