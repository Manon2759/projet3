require('dotenv').config()
const express = require('express')
const messageRoute = require('./src/message/messageRoute')
const chatRoute = require('./src/chat/chatRoute')
const trainRoute = require('./src/train/trainRoute')
const userRoute = require('./src/user/userRoute')

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/messages', messageRoute)
app.use('/chats', chatRoute)
app.use('/trains', trainRoute)
app.use('/users', userRoute)

app.listen(port, () => { console.log(`Server listening on port ${port}`); });
