
// Voy a exportar esta funcion que es un callback que va a recibir un httpServer
// los callbacks se aseguran que una funcion no se va a ejecutar antes de que se complete una tarea 
// como es el caso aca que esta funcion no se va a exportar antes que httpServer se resuelva
module.exports = httpServer => {
    const { Server } = require("socket.io")
    const io = new Server(httpServer)

    io.on("connection", socket => {
        console.log(socket.id);
    })
}
