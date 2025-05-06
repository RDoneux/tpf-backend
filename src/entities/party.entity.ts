import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

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
    @IsNotEmpty()
    description!: string

    @Column({ type: 'integer', nullable: true })
    @IsOptional()
    @IsNumber()
    copper!: number

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt!: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt!: Date
}
