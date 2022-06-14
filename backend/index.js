require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT ?? 5000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const messageRoute = require('./src/message/messageRoute');
const chatRoute = require('./src/chat/chatRoute');
const trainRoute = require('./src/train/trainRoute');
const userRoute = require('./src/user/userRoute');
const authRoute = require('./src/auth/auth.route');


app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + '/filesUploaded'));
app.use(fileUpload())

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


// Les routes de nos differentes tables
app.use('/messages', messageRoute);
app.use('/chats', chatRoute);
app.use('/trains', trainRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);
// Les routes de nos differentes tables

server.listen(port, () => { console.log(`Server listening on port ${port}`); });
