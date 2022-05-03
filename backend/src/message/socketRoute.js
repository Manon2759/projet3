module.exports = function (socket) {
    socket.on('login', function (message) {
        console.log(message)
    })
}
