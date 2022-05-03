const trainModel = require('../models/trainModel');

class TrainController {
  async listTrain(req, res) {
    try {
      const trains = await trainModel.getTrain();
      res.status(200).send(trains);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
}

module.exports = new TrainController();
