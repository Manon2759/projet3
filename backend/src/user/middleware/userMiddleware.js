const Joi = require('joi');
const { joiPassword } = require('joi-password');
const userModel = require('../models/userModels');
class UserMiddleware {
  // Controle le password
  checkIdentity(req, res, next) {
    const {
      pseudonyme, email, password, picture,
    } = req.body;
    const { error } = Joi.object({
      pseudonyme: Joi.string().max(150).required(),
      email: Joi.string().email().max(255).required(),
      password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
      picture: Joi.string().max(255),
    }).validate({
      pseudonyme, email, password, picture,
    }, { abortEarly: false });
    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      next();
    }
  }


  checkPutUserInfo(req, res, next) {
    const {
      pseudonyme, email, password
    } = req.body;

    const { error } = Joi.object({
      pseudonyme: Joi.string().max(150).required(),
      email: Joi.string().email().max(255).required(),
      password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces(),
    }).validate({
      pseudonyme, email, password,
    }, { abortEarly: false });

    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      next();
    }
  }

  //Fait la verification que l'email user n'existe pas. Si il existe erreur.

  async checkEmail(req, res, next) {
    const { email } = req.body;
    const result = await userModel.getUserByEmail(email);
    if (result.length === 0) {
      next();
    } else {
      res.status(409).send({ error: 'Email already exist' });
    }
  }
  async checkPseudonyme(req, res, next) {
    const { pseudonyme } = req.body;
    const result = await userModel.getUserByPseudonyme(pseudonyme);
    if (result.length === 0) {
      next();
    } else {
      res.status(409).send({ error: 'Pseudonyme already exist' });
    }
  }
}
module.exports = new UserMiddleware();