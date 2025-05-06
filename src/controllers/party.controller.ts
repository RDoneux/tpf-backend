import middy from '@middy/core'
import { partyRepository } from '../repositories/party.repository'
import { PartyEntity } from '../entities/party.entity'
import { APIGatewayProxyEvent } from 'aws-lambda'

export const getAllParties = middy().handler(async () => {
    const parties: PartyEntity[] = await partyRepository.find()

    return {
        statusCode: 200,
        body: parties,
    }
})

export const getPartyById = middy().handler(async (event) => {
    const partyId = (event as APIGatewayProxyEvent).pathParameters?.id
    console.log('partyId', partyId)
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

export const createParty = middy().handler(async (event) => {
    const partyData = JSON.parse((event as APIGatewayProxyEvent).body || '{}')
    const party: PartyEntity = await partyRepository.save(partyData)

    return {
        statusCode: 201,
        body: party,
    }
})
