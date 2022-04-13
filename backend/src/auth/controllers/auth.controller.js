const jwt = require('jsonwebtoken')

class AuthController {
    async signin(req, res) {
        const token = jwt.sign({
            email: req.body.email,
        }, process.env.JWT_SECRET, { expiresIn: '6h' })
        res.status(200).send({ token: token })
    }
}

module.exports = new AuthController()