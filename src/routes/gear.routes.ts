import { Route } from '@middy/http-router'
import { APIGatewayProxyResult } from 'aws-lambda'
import { Event } from '@middy/http-event-normalizer'
import { createGearOnParty, deleteGearOnParty, getGearByPartyId } from '../controllers/gear.controller'

export const gearRoutes: Route<Event, APIGatewayProxyResult>[] = [
    {
        method: 'GET',
        path: '/party/{id}/gear',
        handler: getGearByPartyId,
    },
    {
        method: 'POST',
        path: '/party/{id}/gear',
        handler: createGearOnParty,
    },
    {
        method: 'DELETE',
        path: '/party/{id}/gear/{gearId}',
        handler: deleteGearOnParty,
    },
]
