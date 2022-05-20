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
<<<<<<< HEAD
  async addUser(pseudonyme, date, email, hashedPassword, picture, id_train) {
=======
  async addUser(pseudonyme, date, email, hashedPassword, id_train) {
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
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
        'SELECT email, id FROM user WHERE email = ?',
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
<<<<<<< HEAD

  async updateUser(email, password, picture, id) {
=======
  async updateUser(email, password, picture, id, content, cinema, voyage, musique, culture, sport, nouvelle_technologie) {
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
    try {
      const result = await this.connection.promise().query(
        'UPDATE user SET email = ?, password = ?, picture = ?, content = ?, cinema = ?, voyage = ?, musique = ?, culture = ?, sport = ?, nouvelle_technologie = ? WHERE id = ?',
        [email, password, picture, id, content, cinema, voyage, musique, culture, sport, nouvelle_technologie],
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

<<<<<<< HEAD
module.exports = new UserModel();
=======
module.exports = new UserModel();
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
