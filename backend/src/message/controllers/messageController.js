const messageModel = require('../models/messageModel');

class MessageController {
  async listMessage(req, res) {
    try {
      const messages = await messageModel.getMessages();
      res.status(200).send(messages);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async postMessage(req, res) {
    const { date, content, id_chat } = req.body;

    try {
      const messages = await messageModel.postMessage(date, content, id_chat);
      res.status(200).send(messages);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async updateMessage(req, res) {
    const { content, id } = req.body;

    try {
      const messages = await messageModel.updateMessage(content, id);
      res.status(200).send(messages);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async deleteMessage(req, res) {
    try {
      const deletedMessage = await messageModel.deleteMessage(req.params.id);
      res.status(200).send(deletedMessage);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new MessageController();
