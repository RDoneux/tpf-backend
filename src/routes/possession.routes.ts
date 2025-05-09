import { Route } from '@middy/http-router'
import { APIGatewayProxyResult } from 'aws-lambda'
import { Event } from '@middy/http-event-normalizer'
import { createPossessionOnParty, getPossessionByPartyId } from '../controllers/possession.controller'

export const possessionRoutes: Route<Event, APIGatewayProxyResult>[] = [
    {
        method: 'GET',
        path: '/party/{id}/possession',
        handler: getPossessionByPartyId,
    },
    {
        method: 'POST',
        path: '/party/{id}/possession',
        handler: createPossessionOnParty,
    },
]
