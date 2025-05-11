import { response } from 'express'

export const stringifyResponseMiddleware = () => ({
    after: async (request: any) => {
        if (!request.response.headers) {
            request.response.headers = {}
        }
        request.response.headers['Connection'] = 'close'
        if (typeof request.response.body === 'object') {
            request.response.body = JSON.stringify(request.response.body)
        }
    },
})
