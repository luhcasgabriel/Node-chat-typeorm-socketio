import {MigrationInterface, QueryRunner, Table} from "typeorm"; /* yarn add typeorm / @types/typeorm -D*/

export class CreateSettings1619035184505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /**
         * executa migração
         */
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        /**
         * reverte migração
         */

         await queryRunner.dropTable("settings");
    }

}
