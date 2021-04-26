import { User } from "../entities/User";
import { Repository, EntityRepository } from "typeorm"; /* yarn add typeorm / @types/typeorm -D*/

@EntityRepository(User)
class UsersRepository extends Repository<User> {



}

export { UsersRepository }