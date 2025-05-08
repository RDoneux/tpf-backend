import { MigrationInterface, QueryRunner } from 'typeorm'

export class GearTable1746545762188 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "gear" (
                "id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "description" VARCHAR(255),
                "quantity" INTEGER NOT NULL DEFAULT 0,
                "weight" INTEGER NOT NULL DEFAULT 0,
                "special_properties" VARCHAR(255) NOT NULL DEFAULT '',
                "updated_at" TIMESTAMP DEFAULT NOW(),
                "created_at" TIMESTAMP DEFAULT NOW()
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "gear";
        `)
    }
}
