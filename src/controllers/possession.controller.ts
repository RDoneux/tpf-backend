import middy from '@middy/core'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { PartyEntity } from '../entities/party.entity'
import { PossessionEntity } from '../entities/possession.entity'
import { partyRepository } from '../repositories/party.repository'
import { possessionRepository } from '../repositories/possession.repository'
import { Event } from '@middy/http-event-normalizer'
import { partyPossessionViewRepository } from '../repositories/party-possession-view.repository'
import { PartyPossessionViewEntity } from '../entities/party-possession-view.entity'

export const getPossessionByPartyId = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const partyPossessionView: PartyPossessionViewEntity[] | null = await partyPossessionViewRepository.findBy({
        partyId: partyId,
    })
    if (!partyPossessionView) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }
    return {
        statusCode: 200,
        body: partyPossessionView,
    }
})

export const createPossessionOnParty = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const party: PartyEntity | null = await partyRepository.findOne({
        where: { id: partyId },
        relations: ['possessions'],
    })

    if (!party) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }

    const possession: PossessionEntity = plainToInstance(PossessionEntity, event.body)
    const errors = await validate(possession)

    if (errors.length) {
        return {
            statusCode: 400,
            body: { message: 'Validation failed', errors },
        }
    }

    const savedPossession = await possessionRepository.save(possession)
    party.possessions = [...(party.possessions ?? []), savedPossession]

    await partyRepository.save(party)

    return {
        statusCode: 200,
        body: party,
    }
})
