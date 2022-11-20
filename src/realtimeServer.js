
// Voy a exportar esta funcion que es un callback que va a recibir un httpServer
// los callbacks se aseguran que una funcion no se va a ejecutar antes de que se complete una tarea 
// como es el caso aca que esta funcion no se va a exportar antes que httpServer se resuelva
module.exports = httpServer => {
    const { Server } = require("socket.io")
    const io = new Server(httpServer)

    io.on("connection", socket => {
        const cookie = socket.handshake.headers.cookie
        const user = cookie.split("=").pop()
        console.log(user);

        socket.on("message", message => {
            io.emit("message", {
                user,
                message
            })
        })
        console.log(socket.id);
    })
}
