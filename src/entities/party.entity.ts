import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('party')
export class PartyEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 255 })
    name!: string

    @Column({ type: 'varchar', length: 255 })
    description!: string

    @Column({ type: 'integer' })
    copper!: number

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt!: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt!: Date
}
