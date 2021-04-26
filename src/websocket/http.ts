import express, { response } from "express" /* yarn add express - @types/express -D*/
import "../database"; /*por padrão o javascript reconhece um arquivo index dentro da pasta somente indentificando a pasta*/
import { routes } from "../routes"

import { createServer} from "http" /* vem default com o pacote do node, não precisa instalar nada */
import { Server, Socket } from "socket.io" /* yarn add socket.io /+ yarn add @types/socket.io D */

import path from "path";
   
const app = express();

/* configuração para utilizar html dentro do node */
app.use(express.static(path.join(__dirname, "../..", "public"))); /* configurando caminho para utilizar front dentro da pasta public - dentro de join está apontando o diretorio atual, retornando uma pasta e acessando pasta public*/
app.set("views", path.join(__dirname, "../..", "public")); /* setando caminho das views*/
app.engine("html", require("ejs").renderFile); /*renderiza html */ /* precisa instalar o modulo ejs yarn add ejs - sem tipagem do typescript */
app.set("view engine", "html"); 


/* como estamos rodando o socket no front tbm precisamos do socket.io client instalado - yarn add socket.io */
/* se olhar dentro do html tem a chamada do js do socket.io-client js */

/*pedindo pra renderizar essa pagina com essa rota */
app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
})

const http = createServer(app); /* criando o protocolo http */
const io = new Server(http); /* criando o protocolo ws */

/*criando conexão */
io.on("connection", (socket: Socket) => {
    console.log("Se conectou" , socket.id);
});

/* tanto server http com as rotas quanto o server io com a conexão do socket vai funcionar separado */
app.use(express.json());

app.use(routes);


export { http, io}