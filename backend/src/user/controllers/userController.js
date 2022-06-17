/* eslint-disable class-methods-use-this */
const argon2 = require('argon2');

// Communication du controleur avec le model
const userModel = require('../models/userModels');
// Communication du controleur avec le model

class UserController {

  storeFile(req, res) {
    try {
      if (!req.files) {
        res.send({
          status: false,
          message: 'No file uploaded'
        });
      } else {
        //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
        let file = req.files.myImage;

        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        file.mv('./filesUploaded/' + file.name);

        //send response
        res.send({
          status: true,
          message: 'File is uploaded',
          data: {
            name: `http://localhost:5000/${file.name}`,
            mimetype: file.mimetype,
            size: file.size
          }
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };

  // Permet de lister les utilisateurs.
  async listUser(req, res) {
    try {
      const users = await userModel.getUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
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

  //Permet la selection d'un user via son n° de train
  async getUserByTrain(req, res) {
    try {
      const selectUserTrain = await userModel.getUserByTrain(req.body.id_train)
      res.status(200).send(selectUserTrain);
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
  //Permet la selection d'un user via son n° de train

  // Permet d'ajouter un utilisateur et sécuriser son password via Argon2.
  async addUser(req, res) {
    const {
      pseudonyme, email, date, id_train,
    } = req.body;

    try {
      const hashedPassword = await argon2.hash(req.body.password);
      const user = await userModel.addUser(pseudonyme, date, email, hashedPassword, id_train);

      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  // Permet d'ajouter un utilisateur et sécuriser son password via Argon2.

  // Permet de mettre à jour un utilisateur
  async updateUser(req, res) {
    try {
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password)
      };
      const user = await userModel.updateUser(
        req.body, req.params.id
      );
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