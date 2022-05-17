/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');

class AuthController {
  // Création du jeton token lors de la connection
  async signin(req, res) {
    const token = jwt.sign({
      email: req.body.email,
    }, process.env.JWT_SECRET, { expiresIn: '6h' });
    res.cookie('jwt-token', token, { httpOnly: true }); // Pour que le token soit utiliser seulement côter serveur on ne peut pas le modifier  //
    res.status(200).send();
  }

  // Création du jeton token lors de la connection
  async logout (req, res) {
    const token = jwt.sign({
      email: req.body.email,
    }, process.env.JWT_SECRET, { expiresIn: '1' });
    res.cookie('jwt-token', token, { httpOnly: true }); // Pour que le token soit utiliser seulement côter serveur on ne peut pas le modifier  //
    res.status(200).send();
}
}
module.exports = new AuthController();
