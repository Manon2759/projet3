const argon2 = require('argon2')

//Communication du controleur avec le model
const userModel = require('../models/userModels')
//Communication du controleur avec le model

class UserController {
    //Permet de lister la liste d'utilisateurs.
    async listUser(req, res) {
        try {
            const users = await userModel.getUser()
            res.status(200).send(users)
        }
        catch (error) {
            res.status(500).send(error.message)
        }
    }
    //Permet de lister la liste d'utilisateurs.

    //Permet d'ajouter un utilisateur et sécuriser son password via Argon2
    async addUser(req, res) {
        const { pseudonyme, email, picture, id_train } = req.body

        try {
            const hashedPassword = await argon2.hash(req.body.password)
            const user = await userModel.addUser(pseudonyme, email, hashedPassword, picture, id_train)

            res.status(200).send(user)
        }
        catch (error) {
            res.status(500).send(error.message)
        }
    }
    //Permet d'ajouter un utilisateur et sécuriser son password via Argon2
}

module.exports = new UserController()