const express = require('express')
const userController = ('./controllers/userController')

const router = express.Router()

router.get('/', userController.listUser)

module.exports = router