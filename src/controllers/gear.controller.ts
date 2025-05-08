import middy from '@middy/core'
import { Event } from '@middy/http-event-normalizer'
import { partyRepository } from '../repositories/party.repository'
import { PartyEntity } from '../entities/party.entity'
import { GearEntity } from '../entities/gear.entity'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { gearRepository } from '../repositories/gear.repository'
import { partyGearViewRepository } from '../repositories/party-gear-view.repository'
import { PartyGearViewEntity } from '../entities/party-gear-view.entity'

export const getGearByPartyId = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const partyGearView: PartyGearViewEntity[] | null = await partyGearViewRepository.findBy({
        partyId: partyId,
    })
    if (!partyGearView) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }
    return {
        statusCode: 200,
        body: partyGearView,
    }
})

export const createGearOnParty = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const party: PartyEntity | null = await partyRepository.findOne({ where: { id: partyId }, relations: ['gear'] })

    if (!party) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }

    const gear: GearEntity = plainToInstance(GearEntity, event.body)
    const errors = await validate(gear)

    if (errors.length) {
        return {
            statusCode: 400,
            body: { message: 'Validation failed', errors },
        }
    }

    const savedGear = await gearRepository.save(gear)
    party.gear = [...(party.gear ?? []), savedGear]

    await partyRepository.save(party)

    return {
        statusCode: 200,
        body: party,
    }
})
