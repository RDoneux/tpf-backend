import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PartyEntity } from './party.entity'

@Entity('possession')
export class PossessionEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    name!: string

    @Column({ type: 'varchar', length: 255, nullable: true })
    @IsString()
    @IsNotEmpty()
    description!: string

    @Column({ type: 'integer', nullable: true })
    @IsOptional()
    @IsNumber()
    quantity!: number

    @Column({ type: 'integer', nullable: true })
    @IsOptional()
    @IsNumber()
    weight!: number

    @Column({ type: 'integer', nullable: true })
    @IsOptional()
    @IsNumber()
    value!: number

    @ManyToMany(() => PartyEntity, (party) => party.possessions)
    parties!: PartyEntity[]

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt!: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt!: Date
}
