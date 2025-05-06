import { Repository } from 'typeorm'
import { ExampleEntity } from '../entities/example.entity'
import dataSource from '../persistance/data-source'

export const exampleRepository: () => Promise<Repository<ExampleEntity>> = async () =>
    dataSource.getRepository(ExampleEntity)
