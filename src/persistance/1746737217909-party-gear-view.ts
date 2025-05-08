import { MigrationInterface, QueryRunner } from 'typeorm'

export class PartyGearView1746737217909 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE OR REPLACE VIEW party_gear_view AS
            SELECT
                p.id AS party_id,
                g.id AS gear_id,
                g.name AS gear_name,
                g.description AS gear_description,
                g.quantity AS gear_quantity,
                g.weight AS gear_weight,
                g.special_properties AS gear_special_properties,
                g.updated_at AS gear_updated_at,
                g.created_at AS gear_created_at
            FROM
                party p
            JOIN
                party_gear pg ON p.id = pg.party_id
            JOIN
                gear g ON pg.gear_id = g.id;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP VIEW IF EXISTS party_gear_view;
        `)
    }
}
