const mysql = require('mysql2')

class TrainModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getTrain() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM train')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new TrainModel()