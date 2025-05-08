export const parseBodyMiddleware = () => ({
    before: async (request: any) => {
        if (typeof request.event.body === 'string') {
            try {
                request.event.body = JSON.parse(request.event.body)
            } catch (error) {
                throw new Error('Invalid JSON body')
            }
        }
    },
})
