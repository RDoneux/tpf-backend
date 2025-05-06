import { Repository } from "typeorm";
import { ExampleEntity } from "../entities/example.entity";
import { getDataSource } from "../persistance/data-source";

export const exampleRepository: () => Promise<Repository<ExampleEntity>> = async () => (await getDataSource()).getRepository(ExampleEntity)