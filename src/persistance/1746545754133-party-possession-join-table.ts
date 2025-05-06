import { MigrationInterface, QueryRunner } from 'typeorm'

export class PartyPossessionJoinTable1746545754133 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "party_possession" (
                "party_id" UUID NOT NULL,
                "possession_id" UUID NOT NULL,
                PRIMARY KEY ("party_id", "possession_id"),
                FOREIGN KEY ("party_id") REFERENCES "party"("id") ON DELETE CASCADE,
                FOREIGN KEY ("possession_id") REFERENCES "possession"("id") ON DELETE CASCADE
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "party_possession";
        `)
    }
}
