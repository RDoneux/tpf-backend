import { MigrationInterface, QueryRunner } from 'typeorm'

export class PartyGearJoinTable1746545768956 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "party_gear" (
                "party_id" UUID NOT NULL,
                "gear_id" UUID NOT NULL,
                PRIMARY KEY ("party_id", "gear_id"),
                FOREIGN KEY ("party_id") REFERENCES "party"("id") ON DELETE CASCADE,
                FOREIGN KEY ("gear_id") REFERENCES "gear"("id") ON DELETE CASCADE
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "party_gear";
        `)
    }
}
