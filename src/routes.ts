import { Route } from '@middy/http-router'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { partyRoutes } from './routes/party.routes'
import { Event } from '@middy/http-event-normalizer'

export const routes: Route<Event, APIGatewayProxyResult>[] = [...partyRoutes]
