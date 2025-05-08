import { PartyGearViewEntity } from '../entities/party-gear-view.entity'
import dataSource from '../persistance/data-source'

export const partyGearViewRepository = dataSource.getRepository(PartyGearViewEntity)
