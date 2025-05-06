import middy from '@middy/core'
import httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'
import { exampleRepository } from '../repositories/example.repository'

export const exampleGet = middy().handler(async () => {
    try {
        console.log('exampleGet')
        const users = await (await exampleRepository()).find()
        console.log('users', users)
        return {
            statusCode: 200,
            body: JSON.stringify(users),
        }
    } catch (error: unknown) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error',
                error: (error as Error).message,
                values: {
                    HOST: process.env.DB_HOST,
                    PORT: process.env.DB_PORT,
                    USER: process.env.DB_USER,
                    PASSWORD: process.env.DB_PASSWORD,
                    NAME: process.env.DB_NAME,
                    // DATA_SOURCE: await getDataSource(),
                },
            }),
        }
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
