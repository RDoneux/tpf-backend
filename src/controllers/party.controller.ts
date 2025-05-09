import middy from '@middy/core'
import { partyRepository } from '../repositories/party.repository'
import { PartyEntity } from '../entities/party.entity'
import { Event } from '@middy/http-event-normalizer'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { generatePartyKey } from '../utils/party-key-generator'

export const getAllParties = middy().handler(async () => {
    const parties: PartyEntity[] = await partyRepository.find()

    return {
        statusCode: 200,
        body: parties,
    }
})

export const getPartyById = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const party: PartyEntity | null = await partyRepository.findOneBy({ id: partyId })

    if (!party) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }

    return {
        statusCode: 200,
        body: party,
    }
})

export const getPartyByKey = middy<Event>().handler(async (event: Event) => {
    const partyKey = event.pathParameters?.key
    const party: PartyEntity | null = await partyRepository.findOne({
        where: { partyKey },
        // relations: ['gear', 'possessions'],
    })

    if (!party) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }

    return {
        statusCode: 200,
        body: party,
    }
})

export const createParty = middy<Event>().handler(async (event: Event) => {
    const party: PartyEntity = plainToInstance(PartyEntity, event.body)
    party.partyKey = generatePartyKey()

    const errors = await validate(party)

    if (errors.length) {
        return { statusCode: 400, body: { message: 'Validation failed', errors } }
    }

    const savedParty: PartyEntity = await partyRepository.save(party)

    return {
        statusCode: 201,
        body: savedParty.partyKey,
    }
})

export const updateParty = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const party: PartyEntity | null = await partyRepository.findOneBy({ id: partyId })

    if (!party) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }

    const errors = await validate(plainToInstance(PartyEntity, event.body))
    if (errors.length) {
        return { statusCode: 400, body: { message: 'Validation failed', errors } }
    }

    const partyToUpdate: PartyEntity = { ...party, ...plainToInstance(PartyEntity, event.body) }
    const updatedParty: PartyEntity = await partyRepository.save(partyToUpdate)

    return {
        statusCode: 200,
        body: updatedParty,
    }
})

export const deleteParty = middy<Event>().handler(async (event: Event) => {
    const partyId = event.pathParameters?.id
    const party: PartyEntity | null = await partyRepository.findOneBy({ id: partyId })

    if (!party) {
        return {
            statusCode: 404,
            body: { message: 'Party not found' },
        }
    }

    await partyRepository.remove(party)

    return {
        statusCode: 204,
        body: null,
    }
})
