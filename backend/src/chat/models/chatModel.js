const mysql = require('mysql2')

class ChatModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getChat() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM chat')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new ChatModel()