const express = require('express');
const authController = require('./controllers/auth.controller');
const authMiddelware = require('./middlewares/auth.middleware');

const router = express.Router();

router.post('/', [authMiddelware.checkLogin, authController.signin]);

module.exports = router;
