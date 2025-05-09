import { MigrationInterface, QueryRunner } from 'typeorm'

export class PossessionTable1746545740723 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "possession" (
                "id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "description" VARCHAR(255),
                "quantity" INTEGER NOT NULL DEFAULT 0,
                "weight" INTEGER NOT NULL DEFAULT 0,
                "value" INTEGER NOT NULL DEFAULT 0,
                "updated_at" TIMESTAMP DEFAULT NOW(),
                "created_at" TIMESTAMP DEFAULT NOW()
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "possession";
        `)
    }
}
