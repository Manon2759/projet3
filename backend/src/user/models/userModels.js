const mysql = require('mysql2')

class UserModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getUsers() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM user')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    async addUser(pseudonyme, email, password, picture, id_train) {

        try {
            const result = await this.connection.promise().query
                ('INSERT INTO user(pseudonyme, email, password, picture, id_train) VALUES (?, ?, ?, ?, ?)',
                    [pseudonyme, email, password, picture, id_train])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new UserModel()