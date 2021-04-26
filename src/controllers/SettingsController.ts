import { Request, Response } from "express" /* yarn add express - @types/express -D*/
import { SettingsService } from "../service/SettingsService";


class SettingsController {


    async Create(request: Request, response: Response) {

        const {chat, username } = request.body;

        const settingsService = new SettingsService();
        
        try {

            const settings = await settingsService.create({ chat, username });
            return response.json(settings);

        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
       

        
    }

}

export { SettingsController }