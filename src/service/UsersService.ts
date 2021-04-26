import { getCustomRepository, Repository } from "typeorm" /* yarn add typeorm / @types/typeorm -D*/
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"



class UserService {

    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async Create( email: string ) {



        const userAlreadyExists = await this.usersRepository.findOne({ email });

        if(userAlreadyExists) {
            return userAlreadyExists;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);

        return user;

    }

}

export { UserService } 