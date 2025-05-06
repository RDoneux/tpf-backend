import { Repository } from 'typeorm'
import dataSource from '../persistance/data-source'
import { PartyEntity } from '../entities/party.entity'

export const partyRepository: Repository<PartyEntity> = dataSource.getRepository(PartyEntity)
