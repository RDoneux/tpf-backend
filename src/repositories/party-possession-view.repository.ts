import { PartyPossessionViewEntity } from '../entities/party-possession-view.entity'
import dataSource from '../persistance/data-source'

export const partyPossessionViewRepository = dataSource.getRepository(PartyPossessionViewEntity)
