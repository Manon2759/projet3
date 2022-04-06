const messageModel = require('../models/messageModel')

class MessageController {
    async listMessage(req, res) {
        try {
            const messages = await messageModel.getMessage()
            res.status(200).send(messages)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new MessageController()