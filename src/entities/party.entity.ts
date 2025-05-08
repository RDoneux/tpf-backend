import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { GearEntity } from './gear.entity'
import { PossessionEntity } from './possession.entity'

@Entity('party')
export class PartyEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    name!: string

    @Column({ type: 'varchar', length: 255, nullable: true })
    @IsString()
    @IsOptional()
    description!: string

    @Column({ type: 'integer', nullable: true })
    @IsOptional()
    @IsNumber()
    copper!: number

    @Column({ name: 'party_key', type: 'varchar', length: 6, unique: true })
    @IsNotEmpty()
    @IsString()
    partyKey!: string

    @ManyToMany(() => GearEntity, (gear) => gear.parties)
    @JoinTable({
        name: 'party_gear',
        joinColumn: {
            name: 'party_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'gear_id',
            referencedColumnName: 'id',
        },
    })
    gear!: GearEntity[]

    @ManyToMany(() => PossessionEntity, (possession) => possession.parties)
    @JoinTable({
        name: 'party_possession',
        joinColumn: {
            name: 'party_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'possession_id',
            referencedColumnName: 'id',
        },
    })
    possessions!: PossessionEntity[]

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt!: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt!: Date
}
