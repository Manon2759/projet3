const express = require('express');
const messageController = require('./controllers/messageController');

const router = express.Router();

router.get('/', messageController.listMessage);
router.post('/', messageController.postMessage);
router.put('/:id', messageController.updateMessage);
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
