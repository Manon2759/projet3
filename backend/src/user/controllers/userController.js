/* eslint-disable class-methods-use-this */
const argon2 = require('argon2');

// Communication du controleur avec le model
const userModel = require('../models/userModels');
// Communication du controleur avec le model

class UserController {
  // Permet de lister les utilisateurs.
  async listUser(req, res) {
    try {
      const users = await userModel.getUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
<<<<<<< HEAD
  // Permet de lister la liste d'utilisateurs.

  // Permet d'ajouter un utilisateur et sécuriser son password via Argon2
=======
  // Permet de lister les utilisateurs.


  //Permet la selection d'un user via son Email
  async getUserByEmail(req, res) {
    try {
      const selectUser = await userModel.getUserByEmail(req.body)
      res.status(200).send(selectUser);
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
  //Permet la selection d'un user via son Email

  // Permet d'ajouter un utilisateur et sécuriser son password via Argon2.
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
  async addUser(req, res) {
    const {
      pseudonyme, email, date, id_train,
    } = req.body;

    try {
      const hashedPassword = await argon2.hash(req.body.password);
<<<<<<< HEAD
      const user = await userModel.addUser(pseudonyme, date, email, hashedPassword, picture, id_train);

=======
      const user = await userModel.addUser(pseudonyme, date, email, hashedPassword, id_train);
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
<<<<<<< HEAD
  // Permet d'ajouter un utilisateur et sécuriser son password via Argon2

  // Permet de mettre à jour un utilisateur
  async updateUser(req, res) {
    const { email, picture, id } = req.body;

    try {
      const hashedPassword = await argon2.hash(req.body.password);
      const user = await userModel.updateUser(email, hashedPassword, picture, id);

=======
  // Permet d'ajouter un utilisateur et sécuriser son password via Argon2.

  // Permet de mettre à jour un utilisateur
  async updateUser(req, res) {
    const { email, picture, id, content, cinema, voyage, musique, culture, sport, nouvelle_technologie } = req.body;
    try {
      const hashedPassword = await argon2.hash(req.body.password);
      const user = await userModel.updateUser(
        email, hashedPassword, picture, id, content, cinema, voyage, musique, culture, sport, nouvelle_technologie
      );
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  // Permet de mettre à jour un utilisateur

  // Permet de supprimer un utilisateur
  async deleteUser(req, res) {
    try {
      const deleteUser = await userModel.deleteUser(req.params.id);

      res.status(200).send(deleteUser);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  // Permet de supprimer un utilisateur


}

module.exports = new UserController();