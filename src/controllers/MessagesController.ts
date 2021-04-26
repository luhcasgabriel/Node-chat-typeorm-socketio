
import { Request, Response} from "express" /* yarn add express - @types/express -D*/
import { MessagesService } from "../service/MessagesService";





class MessagesController {


    async Create(request: Request, response: Response) {

        const { admin_id, text, user_id } = request.body;

        const messagesService = new MessagesService();

        const message = await messagesService.Create({
            admin_id,
            text,
            user_id
        });

        return response.json(message);

    }


    async showByUser(request: Request, response: Response) {

        const { id } = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.ListByUsers(id);

        return response.json(list);
    }

}

export { MessagesController }