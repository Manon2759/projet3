const userModel = require('../../user/models/userModels')

class AuthModel {
    async getUserHash(email) {
        try {
            const result = await userModel.connection.promise().query('SELECT * FROM user WHERE email = ?', [email])
            return result[0][0]
        }
        catch (error) {
            throw error
        }

    }
}

module.exports = new AuthModel()