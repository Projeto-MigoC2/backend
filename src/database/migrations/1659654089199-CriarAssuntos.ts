import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarAssuntos1659654089199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'assuntos',
                columns: [
                    {
                        name: "nome",
                        type: "varchar",
                        isPrimary: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('assuntos')
    }

}
