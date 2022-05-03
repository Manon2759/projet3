module.exports = function (socket) {
  socket.on('login', (message) => {
    console.log(message);
  });
};
