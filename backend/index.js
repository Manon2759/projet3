require('dotenv').config();
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: '*' });
const socketMVC = require('socket.mvc');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const messageRoute = require('./src/message/messageRoute');
const chatRoute = require('./src/chat/chatRoute');
const trainRoute = require('./src/train/trainRoute');
const userRoute = require('./src/user/userRoute');
const authRoute = require('./src/auth/auth.route');
const socketRoute = require('./src/message/socketRoute');
const fileUpload = require('express-fileupload')


io.sockets.on('connection', (socket) => {
  console.log('connected');
  socketMVC.init(io, socket, {
    debug: true,
    filePath: ['./src/message/socketRoute.js'],
  });
});

const port = process.env.PORT ?? 5000;

app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(fileUpload())

// Les routes de nos differentes tables
app.use('/messages', messageRoute);
app.use('/chats', chatRoute);
app.use('/trains', trainRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/sockets', socketRoute);

// Les routes de nos differentes tables

server.listen(port, () => { console.log(`Server listening on port ${port}`); });
