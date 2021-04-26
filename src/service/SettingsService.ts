import { getCustomRepository, Repository } from "typeorm"; /* yarn add typeorm / @types/typeorm -D*/
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {

    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username } : ISettingsCreate) {


        const userAlreadyExists = await this.settingsRepository.findOne({ username }); /* pode ser o where direto tbm */

        if(userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(settings);

        return settings;
    }


}


export { SettingsService }