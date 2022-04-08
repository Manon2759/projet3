const mysql = require('mysql2')

class MessageModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getMessages() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM message')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async postMessages(date, content, id_chat) {
        try {
            const result = await this.connection.promise().query
                ('INSERT INTO message (date, content, id_chat) VALUES (?, ?, ?)'
                    , [date, content, id_chat])

            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new MessageModel()