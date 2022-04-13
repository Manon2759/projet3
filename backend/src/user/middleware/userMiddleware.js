const Joi = require('joi');
const userModel = require('../models/userModels')
const { joiPassword } = require('joi-password');


class UserMiddleware {

    //Controle le password
    checkIdentity(req, res, next) {
        const { pseudonyme, email, password, picture } = req.body

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
            picture: Joi.string().max(255)
        }).validate({ pseudonyme, email, password, picture }, { abortEarly: false });

        if (error) {
            res.status(422).json({ validationErrors: error.details });
        } else {
            next()
        }
    }

    async checkEmail(req, res, next) {
        const { email } = req.body
        const result = await userModel.getUserByEmail(email)
        if (result.length === 0) {
            next()
        } else {
            res.status(409).send({ error: 'Email already exist' })
        }
    }
}

module.exports = new UserMiddleware()

