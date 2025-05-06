import { exampleGet, examplePost } from './controllers/example.controller'

export const routes: any[] = [
    {
        method: 'GET',
        path: '/test',
        handler: exampleGet,
    },
    {
        method: 'POST',
        path: '/test',
        handler: examplePost,
    },
]
