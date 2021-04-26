
import { getCustomRepository, Repository } from "typeorm" /* yarn add typeorm / @types/typeorm -D*/
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository"


interface IMessageCreate {
    admin_id?: string; /*como o admin_id pode vir nulo, então se coloca um ? antes caso na controller venha nulo e a service acaba sabendo disso e não explodindo erro  */
    text: string;
    user_id: string;
}

class MessagesService {

    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async Create({ admin_id, text, user_id} : IMessageCreate) {

        
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(message)

        return message;
    }

    async ListByUsers(user_id: string) {


        const list = this.messagesRepository.find({
            where: { user_id },
            relations: ["user"] /* referencia user dentro de message, quando usa o whre consegue relacionar e buscar os dados 
            com um join*/
        });


        /*const list = messagesRepository.find({
            user_id
        });*/

        return list;


    }

}

export { MessagesService }