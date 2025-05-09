import { Repository } from 'typeorm'
import { PossessionEntity } from '../entities/possession.entity'
import dataSource from '../persistance/data-source'

export const possessionRepository: Repository<PossessionEntity> = dataSource.getRepository(PossessionEntity)
