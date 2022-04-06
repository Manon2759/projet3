const chatModel = require('../models/chatModel')

class ChatController {
    async listChat(req, res) {
        try {
            const chats = await chatModel.getChat()
            res.status(200).send(chats)
        }
        catch (error) {
            res.status(500).send({ error: error })
        }
    }
}

module.exports = new ChatController()