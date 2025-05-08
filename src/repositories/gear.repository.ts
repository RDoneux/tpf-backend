import { GearEntity } from '../entities/gear.entity'
import dataSource from '../persistance/data-source'

export const gearRepository = dataSource.getRepository(GearEntity)
