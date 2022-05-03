const express = require('express');
const chatController = require('./controllers/chatController');

const router = express.Router();

router.get('/', chatController.listChat);

module.exports = router;
