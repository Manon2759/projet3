const express = require('express')
const messageController = ('./controllers/messageController')

const router = express.Router()

router.get('/', messageController.listMessage)

module.exports = router