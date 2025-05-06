import { Route } from '@middy/http-router'
import { getAllParties, getPartyById } from '../controllers/party.controller'

export const partyRoutes: Route<any, any>[] = [
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
]
