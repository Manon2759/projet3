const express = require('express');
const userController = require('./controllers/userController');
const userMiddleware = require('./middleware/userMiddleware');
const router = express.Router();

router.get('/', userController.listUser);
router.get('/train/:id_train', userController.getUserByTrain)

router.post(
  '/',
  [
    userMiddleware.checkIdentity,
    userMiddleware.checkEmail,
    userMiddleware.checkPseudonyme,
    userController.addUser,
  ],
);

router.put('/uploads/:id', userController.storeFile)
router.put('/:id', userMiddleware.checkPutUserInfo, userController.updateUser);

router.delete('/:id', userController.deleteUser);
module.exports = router;