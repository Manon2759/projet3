const mysql = require('mysql2')


class UserModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
    //Permet d'afficher la liste d'utilisateur
    async getUser() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM user')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    //Permet d'afficher la liste d'utilisateur

    //Ajout d'un utilisateur
    async addUser(pseudonyme, email, hashedPassword, picture, id_train) {

        try {
            const result = await this.connection.promise().query
                ('INSERT INTO user(pseudonyme, email, password, picture, id_train) VALUES (?, ?, ?, ?, ?)',
                    [pseudonyme, email, hashedPassword, picture, id_train])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    //Ajout d'un utilisateur

    async getUserByEmail(email) {
        try {
            const result = await this.connection.promise().query(
                'SELECT email FROM user WHERE email = ?',
                [email]
            )
            return result[0]

        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new UserModel()