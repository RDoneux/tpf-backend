import { MigrationInterface, QueryRunner } from 'typeorm'

export class Init1746541208075 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "example" (
                "id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                "description" VARCHAR(255) NOT NULL,
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "example";
        `)
    }
}
