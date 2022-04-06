const express = require('express')
const chatController = ('./controllers/chatController')

const router = express.Router()

router.get('/', chatController.listChat)

module.exports = router