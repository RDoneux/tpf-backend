import { MigrationInterface, QueryRunner } from 'typeorm'

export class PartyHeroJoinTable1746543940852 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "party_hero" (
                "party_id" UUID NOT NULL,
                "hero_id" UUID NOT NULL,
                PRIMARY KEY ("party_id", "hero_id"),
                FOREIGN KEY ("party_id") REFERENCES "party"("id") ON DELETE CASCADE,
                FOREIGN KEY ("hero_id") REFERENCES "hero"("id") ON DELETE CASCADE
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "party";
        `)
    }
}
