require('dotenv').config()
const express = require('express')
const messageRoute = require('./message/messageRoute')
const chatRoute = require('./chat/chatRoute')
const trainRoute = require('./train/trainRoute')
const userRoute = require('./user/userRoute')


const app = express()
app.use(express.json())
app.use('/messages', messageRoute)
app.use('/chats', chatRoute)
app.use('/trains', trainRoute)
app.use('./users', userRoute)
