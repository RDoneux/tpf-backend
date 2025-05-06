import middy from '@middy/core'
import httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'

export const exampleGet = middy().handler(async () => {
    return {
        statusCode: 200,
    }
})

export const examplePost = middy()
    .use(httpJsonBodyParserMiddleware())
    .handler((event) => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: event.body,
            }),
        }
    })
