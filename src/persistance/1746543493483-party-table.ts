import { MigrationInterface, QueryRunner } from 'typeorm'

export class PartyTable1746543493483 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "party" (
                "id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "description" VARCHAR(255) NOT NULL,
                "party_key" VARCHAR(6) NOT NULL,
                "copper" INTEGER NOT NULL DEFAULT 0,
                "updated_at" TIMESTAMP DEFAULT NOW(),
                "created_at" TIMESTAMP DEFAULT NOW()
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "party_hero";
        `)
    }
}
