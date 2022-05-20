const mysql = require('mysql2');

class UserModel {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Permet d'afficher la liste d'utilisateur
  async getUsers() {
    try {
      const result = await this.connection.promise().query('SELECT * FROM user');
      return result[0];
    } catch (error) {
      throw error;
    }
  }
  // Permet d'afficher la liste d'utilisateur

  // Ajout d'un utilisateur
  async addUser(pseudonyme, date, email, hashedPassword, id_train) {
    try {
      const result = await this.connection.promise().query(
        'INSERT INTO user(pseudonyme, email, date, password, id_train) VALUES (?, ?, ?, ?, ?)',
        [pseudonyme, email, date, hashedPassword, id_train],
      );
      return result[0];
    } catch (error) {
      throw error;
    }
  }
  // Ajout d'un utilisateur

  async getUserByEmail(email) {
    try {
      const result = await this.connection.promise().query(
        'SELECT email, id, pseudonyme FROM user WHERE email = ?',
        [email],
      );
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getUserByPseudonyme(pseudonyme) {
    try {
      const result = await this.connection.promise().query(
        'SELECT pseudonyme FROM user WHERE pseudonyme = ?',
        [pseudonyme],
      );
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async updateUser(user, id) {

    try {
      const result = await this.connection.promise().query(
        'UPDATE user SET ? WHERE id = ?',
        [user, id]
      );
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const result = await this.connection.promise().query(
        'DELETE FROM user WHERE id = ?',
        [id],
      );
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserModel();
