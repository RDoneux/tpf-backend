import { MigrationInterface, QueryRunner } from 'typeorm'

export class PartyPosessionView1746774580361 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE OR REPLACE VIEW party_possession_view AS
            SELECT
                p.id AS party_id,
                ps.id AS possession_id,
                ps.name AS possession_name,
                ps.description AS possession_description,
                ps.quantity AS possession_quantity,
                ps.weight AS possession_weight,
                ps.value AS possession_value,
                ps.updated_at AS possession_updated_at,
                ps.created_at AS possession_created_at
            FROM
                party p
            JOIN
                party_possession pp ON p.id = pp.party_id
            JOIN
                possession ps ON pp.possession_id = ps.id;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP VIEW IF EXISTS party_possession_view;
        `)
    }
}
