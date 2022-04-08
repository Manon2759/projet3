const Joi = require('joi');
const { joiPassword } = require('joi-password');


class UserMiddleware {

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

}

module.exports = new UserMiddleware()

