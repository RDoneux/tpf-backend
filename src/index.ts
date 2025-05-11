import 'reflect-metadata'
import middy from '@middy/core'
import httpContentNegotiationMiddleware from '@middy/http-content-negotiation'
import httpEventNormalizerMiddleware from '@middy/http-event-normalizer'
import httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'
import warmupMiddleware from '@middy/warmup'
import httpRouterHandler from '@middy/http-router'
import { routes } from './routes'
import { dataSourceMiddleware } from './middleware/data-source'
import { parseBodyMiddleware } from './middleware/parse-body'
import { stringifyResponseMiddleware } from './middleware/stringify-response'

// .use(validatorMiddleware({ eventSchema, responseSchema }))
// .use(httpJsonBodyParserMiddleware()) // IMPORTANT

export const handler = middy()
    .use(dataSourceMiddleware())
    .use(warmupMiddleware())
    .use(httpEventNormalizerMiddleware())
    .use(httpHeaderNormalizerMiddleware())
    .use(
        httpContentNegotiationMiddleware({
            availableLanguages: ['en-CA', 'fr-CA'],
            availableMediaTypes: ['application/json'],
        })
    )
    .use(parseBodyMiddleware())
    .use(stringifyResponseMiddleware())
    .handler(httpRouterHandler(routes))
