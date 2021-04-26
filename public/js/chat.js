

/* evento de clique no botão  iniciar chat */
document.querySelector("#start_chat").addEventListener("click", (event) => {


    console.log("cheguei aqui ");

    const socket = io(); /* inicializando a conexão de client pra server  */

    const chat_help = document.getElementById("chat_help");
    chat_help.style.display = "none";

    const chat_in_support = document.getElementById("chat_in_support");
    chat_in_support.style.display = "block";



    const email = document.getElementById("email").value;
    const text = document.getElementById("txt_help").value;

    /* conectando */
    socket.on("connect", () => {

        /* criou objeto de parametros para passar no evento  */
        const params = {
            email,
            text
        };

        /* emitindo evento para o evento client_first_access dentro de client.ts */
        socket.emit("client_first_access" , params, (call, err) => {

            /* callback */
            if(err) {
                console.err(err);
            } else {
                console.log(call);
            }
            
        });
    });

});
