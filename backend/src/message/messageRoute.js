const express = require('express')
const messageController = require('./controllers/messageController')

const router = express.Router()

router.get('/', messageController.listMessage)
router.post('/', messageController.postMessages)

module.exports = router