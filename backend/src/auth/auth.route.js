const express = require('express')
const authController = require('./controllers/auth.controller')
const authMiddelware = require('./middlewares/auth.middleware')


const router = express.Router()

router.post('/', [authMiddelware.checkPassword, authController.signin])

module.exports = router