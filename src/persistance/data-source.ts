import { DataSource } from 'typeorm'
import { ExampleEntity } from '../entities/example.entity'
import { Init1746541208075 } from './1746541208075-Init'

// let dataSource: DataSource | null = null

// export const getDataSource = async (): Promise<DataSource> => {
//     console.log('getDataSource', dataSource)
//     if (!dataSource) {
//         console.log('Initializing data source')
//         dataSource = new DataSource({
//             type: 'postgres',
//             host: process.env.DB_HOST,
//             port: Number(process.env.DB_PORT),
//             username: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//             entities: [ExampleEntity],
//             logging: ['query', 'error'],
//             synchronize: true,
//             dropSchema: true,
//             migrations: [Init1746541208075],
//             extra: {
//                 connectionTimeoutMillis: 30000,
//             },
//         })
//         console.log('Data source created')
//         try {
//             await dataSource.initialize()
//         } catch (error) {
//             console.error('Error initializing data source', error)
//             throw new Error('Error initializing data source')
//         }
//         console.log('Data source initialized')
//     }
//     return dataSource
// }

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [ExampleEntity],
    logging: ['query', 'error'],
    synchronize: true,
    dropSchema: true,
    migrations: [Init1746541208075],
    extra: {
        connectionTimeoutMillis: 30000,
    },
})
