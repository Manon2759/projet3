const mysql = require('mysql2');

class MessageModel {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Affiche les messages
  async getMessages() {
    try {
      const result = await this.connection.promise().query('SELECT * FROM message');
      return result[0];
    } catch (error) {
      throw error;
    }
  }
  // Affiche les messages

  // Poste les messages
  async postMessage(date, content, id_chat) {
    try {
      const result = await this.connection.promise().query(
        'INSERT INTO message (date, content, id_chat) VALUES (?, ?, ?)',
        [date, content, id_chat],
      );

      return result[0];
    } catch (error) {
      throw error;
    }
  }
  // Poste les messages

  // Permet de changer son message
  async updateMessage(content, id) {
    try {
      const result = await this.connection.promise().query(
        'UPDATE message SET content = ? WHERE id = ?',
        [content, id],
      );

      return result[0];
    } catch (error) {
      throw error;
    }
  }
  // Permet de changer son message

  // Supprime un message
  async deleteMessage(id) {
    try {
      const result = await this.connection.promise().query(
        'DELETE FROM message WHERE id = ?',
        [id],
      );

      return result[0];
    } catch (error) {
      throw error;
    }
  }
  // Supprime un message
}

module.exports = new MessageModel();
