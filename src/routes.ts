import { request, response, Router } from "express"; /* yarn add express - @types/express -D*/
import { MessagesController } from "./controllers/MessagesController";

import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settinsgController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings" , settinsgController.Create);

routes.post("/users", usersController.Create);

routes.post("/messages", messagesController.Create);
routes.get("/messages/:id", messagesController.showByUser);





export { routes };
