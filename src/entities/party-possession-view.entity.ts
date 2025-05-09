import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('party_possession_view')
export class PartyPossessionViewEntity {
    @PrimaryColumn({ name: 'party_id', type: 'varchar', length: 255 })
    partyId!: string

    @PrimaryColumn({ name: 'possession_id', type: 'varchar', length: 255 })
    possessionId!: string

    @PrimaryColumn({ name: 'possession_name', type: 'varchar', length: 255 })
    possessionName!: string

    @Column({ name: 'possession_description', type: 'varchar', length: 255, nullable: true })
    possessionDescription!: string

    @Column({ name: 'possession_quantity', type: 'integer' })
    possessionQuantity!: number

    @Column({ name: 'possession_weight', type: 'integer' })
    possessionWeight!: number

    @Column({ name: 'possession_value', type: 'integer' })
    possessionValue!: number

    @Column({ name: 'possession_created_at', type: 'timestamp' })
    createdAt!: Date

    @Column({ name: 'possession_updated_at', type: 'timestamp' })
    updatedAt!: Date
}
