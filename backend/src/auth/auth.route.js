const express = require('express');
const authController = require('./controllers/auth.controller');
const authMiddelware = require('./middlewares/auth.middleware');

const router = express.Router();

router.post('/login', [authMiddelware.checkLogin, authController.signin]);
router.post('/logout', [authController.logout]);
router.get('/');

module.exports = router;
