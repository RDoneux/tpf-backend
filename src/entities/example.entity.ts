import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("example")
export class ExampleEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({type: "varchar", length: 255})
  description!: string;
}
