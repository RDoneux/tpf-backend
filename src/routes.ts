import { Route } from '@middy/http-router'
import { APIGatewayProxyResult } from 'aws-lambda'
import { partyRoutes } from './routes/party.routes'
import { Event } from '@middy/http-event-normalizer'
import { gearRoutes } from './routes/gear.routes'
import { possessionRoutes } from './routes/possession.routes'

export const routes: Route<Event, APIGatewayProxyResult>[] = [...partyRoutes, ...gearRoutes, ...possessionRoutes]
