const userModel = require('../models/userModels')

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

    async addUser(req, res) {
        const { pseudonyme, email, password, picture, id_train } = req.body

        try {
            const idUser = await userModel.addUser(pseudonyme, email, password, picture, id_train)
            res.status(200).send(idUser)
        }
        catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new UserController()