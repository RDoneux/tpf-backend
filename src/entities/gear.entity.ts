import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PartyEntity } from './party.entity'

@Entity('gear')
export class GearEntity {
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
    @IsNumber()
    @IsOptional()
    quantity!: number

    @Column({ type: 'varchar', length: 255, nullable: true })
    @IsNumber()
    @IsOptional()
    weight!: number

    @Column({ name: 'special_properties', type: 'varchar', length: 255, nullable: true })
    @IsString()
    @IsOptional()
    specialProperties!: string

    @ManyToMany(() => PartyEntity, (party) => party.gear)
    parties!: PartyEntity[]

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt!: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt!: Date
}
