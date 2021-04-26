

import { Repository, EntityRepository } from "typeorm"; /* yarn add typeorm / @types/typeorm -D*/
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {



}

export { SettingsRepository };