
import { Request, Response } from "express" /* yarn add express - @types/express -D*/
import { UserService } from "../service/UsersService"

class UsersController {


    async Create(request: Request, response: Response): Promise<Response> {

        const { email } = request.body;

        const usersService = new UserService();

        const user = await usersService.Create(email);

        return response.json(user);
    }


}

export { UsersController } 