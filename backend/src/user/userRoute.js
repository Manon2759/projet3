const express = require('express');
const userController = require('./controllers/userController');
const userMiddleware = require('./middleware/userMiddleware');
const router = express.Router();
<<<<<<< HEAD
router.get('/', userController.listUser);
=======

router.get('/', userController.listUser, userController.getUserByEmail);

>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
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