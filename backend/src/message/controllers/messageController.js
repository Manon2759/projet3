const messageModel = require('../models/messageModel')

class MessageController {
    async listMessage(req, res) {
        try {
            const messages = await messageModel.getMessages()
            res.status(200).send(messages)
        }
        catch (error) {
            res.status(500).send(error.message)
        }
    }
    async postMessages(req, res) {

        const { date, content, id_chat } = req.body

        try {
            const messages = await messageModel.postMessages(date, content, id_chat)
            res.status(200).send(messages)
        }
        catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new MessageController()