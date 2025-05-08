import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('party_gear_view')
export class PartyGearViewEntity {
    @PrimaryColumn({ name: 'party_id', type: 'varchar', length: 255 })
    partyId!: string

    @PrimaryColumn({ name: 'gear_id', type: 'varchar', length: 255 })
    gearId!: string

    @Column({ name: 'gear_name', type: 'varchar', length: 255 })
    gearName!: string

    @Column({ name: 'gear_description', type: 'varchar', length: 255, nullable: true })
    gearDescription!: string

    @Column({ name: 'gear_quantity', type: 'integer' })
    gearQuantity!: number

    @Column({ name: 'gear_weight', type: 'integer' })
    gearWeight!: number

    @Column({ name: 'gear_special_properties', type: 'varchar', length: 255, nullable: true })
    gearSpecialProperties!: string

    @Column({ name: 'gear_created_at', type: 'timestamp' })
    createdAt!: Date

    @Column({ name: 'gear_updated_at', type: 'timestamp' })
    updatedAt!: Date
}
