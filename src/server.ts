import { http } from "./websocket/http"
import "./websocket/client";


http.listen(3333, () => console.log('server is running on port 3333')); /* a partir do momento que foi embuitido o server http no io , podemos inicializar eles juntos */


