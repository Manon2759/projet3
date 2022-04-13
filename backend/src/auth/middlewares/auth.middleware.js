const authModel = require('../models/auth.model')
const argon2 = require('argon2')


class AuthMiddleware {
    async checkPassword(req, res, next) {
        try {
            const user = await authModel.getUserHash(req.body.email)
            if (user) {
                if (await argon2.verify(user.password, req.body.password)) {
                    req.body.hash = user.password
                    if (user.email)
                        next()
                }
                else {
                    res.status(400).send({ error: 'Email or password does not match' })
                }
            }
            else {
                res.status(400).send({ error: 'Email or password does not match' })
            }

        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new AuthMiddleware()