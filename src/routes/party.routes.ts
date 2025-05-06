import { Route } from '@middy/http-router'
import { createParty, deleteParty, getAllParties, getPartyById, updateParty } from '../controllers/party.controller'
import { APIGatewayProxyResult } from 'aws-lambda'
import { Event } from '@middy/http-event-normalizer'

export const partyRoutes: Route<Event, APIGatewayProxyResult>[] = [
    {
        method: 'GET',
        path: '/party',
        handler: getAllParties,
    },
    {
        method: 'GET',
        path: '/party/{id}',
        handler: getPartyById,
    },
    {
        method: 'POST',
        path: '/party',
        handler: createParty,
    },
    {
        method: 'PUT',
        path: '/party/{id}',
        handler: updateParty,
    },
    {
        method: 'DELETE',
        path: '/party/{id}',
        handler: deleteParty,
    },
]
