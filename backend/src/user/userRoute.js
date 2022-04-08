const express = require('express')
const userController = require('./controllers/userController')
const userMiddleware = require('./middleware/userMiddleware')

const router = express.Router()

router.get('/', userController.listUser)
router.post('/', [userMiddleware.checkIdentity, userController.addUser])

module.exports = router