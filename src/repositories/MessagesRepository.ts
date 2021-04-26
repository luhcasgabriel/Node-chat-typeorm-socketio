import { Entity, EntityRepository, Repository } from "typeorm" /* yarn add typeorm / @types/typeorm -D*/
import { Message } from "../entities/Message"


@EntityRepository(Message)
class MessagesRepository extends Repository<Message>{

}

export { MessagesRepository }