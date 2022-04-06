const userModel = require('../models/userModel')

class UserController {
    async listUser(req, res) {
        try {
            const users = await userModel.getUser()
            res.status(200).send(users)
        }
        catch (error) {
            res.status(500).send({ error: error })
        }
    }
}

module.exports = new UserController()