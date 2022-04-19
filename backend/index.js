require('dotenv').config()
const express = require('express')
const app = express()

const messageRoute = require('./src/message/messageRoute')
const chatRoute = require('./src/chat/chatRoute')
const trainRoute = require('./src/train/trainRoute')
const userRoute = require('./src/user/userRoute')
const authRoute = require('./src/auth/auth.route')

const port = process.env.PORT || 3000

app.use(express.json())

//Les routes de nos differentes tables
app.use('/messages', messageRoute)
app.use('/chats', chatRoute)
app.use('/trains', trainRoute)
app.use('/users', userRoute)
app.use('/auth', authRoute)
//Les routes de nos differentes tables

app.listen(port, () => { console.log(`Server listening on port ${port}`); });
