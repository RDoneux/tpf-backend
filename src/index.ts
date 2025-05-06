import 'reflect-metadata'
import middy from '@middy/core'
import httpContentNegotiationMiddleware from '@middy/http-content-negotiation'
import httpContentEncodingMiddleware from '@middy/http-content-encoding'
import httpErrorHandlerMiddleware from '@middy/http-error-handler'
import httpEventNormalizerMiddleware from '@middy/http-event-normalizer'
import httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'
import httpPartialResponseMiddleware from '@middy/http-partial-response'
import httpSecurityHeadersMiddleware from '@middy/http-security-headers'
import httpUrlencodePathParametersParserMiddleware from '@middy/http-urlencode-path-parser'
import httpResponseSerializerMiddleware from '@middy/http-response-serializer'
import warmupMiddleware from '@middy/warmup'
import httpRouterHandler from '@middy/http-router'
import { routes } from './routes'
import dataSourceObject from './persistance/data-source'
import { dataSourceMiddleware } from './middleware/data-source'

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
    .use(httpUrlencodePathParametersParserMiddleware())
    .use(httpSecurityHeadersMiddleware())
    .use(httpContentEncodingMiddleware())
    // .use(
    //     httpResponseSerializerMiddleware({
    //         serializers: [
    //             {
    //                 regex: /^application\/json$/,
    //                 serializer: ({ body }) => JSON.stringify(body),
    //             },
    //         ],
    //         defaultContentType: 'application/json',
    //     })
    // )
    .use(httpPartialResponseMiddleware())
    .use(httpErrorHandlerMiddleware())
    .handler(httpRouterHandler(routes))
