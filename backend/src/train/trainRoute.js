const express = require('express')
const trainController = ('./controllers/trainController')

const router = express.Router()

router.get('/', trainController.listTrain)

module.exports = router