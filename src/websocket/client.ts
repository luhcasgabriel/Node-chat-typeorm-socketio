import { Socket } from "socket.io"
import { io } from "./http"


/* socket.io podemos escutar eventos e criar eventos para uma conexão */



io.on("connection", (Socket) => {
    Socket.on("client_first_access", (params) => {
        /* podemos criar eventos com qualquer nome  */
        console.log(params);

    }) ;
});