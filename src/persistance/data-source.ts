import { DataSource } from 'typeorm'
import { ExampleEntity } from '../entities/example.entity'
import { PartyTable1746543493483 } from './1746543493483-party-table'
import { HeroTable1746543904662 } from './1746543904662-hero-table'
import { PartyHeroJoinTable1746543940852 } from './1746543940852-party-hero-join-table'
import { PossessionTable1746545740723 } from './1746545740723-possession-table'
import { PartyPossessionJoinTable1746545754133 } from './1746545754133-party-possession-join-table'
import { GearTable1746545762188 } from './1746545762188-gear-table'
import { PartyGearJoinTable1746545768956 } from './1746545768956-party-gear-join-table'

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
    migrations: [
        PartyTable1746543493483,
        HeroTable1746543904662,
        PartyHeroJoinTable1746543940852,
        PossessionTable1746545740723,
        PartyPossessionJoinTable1746545754133,
        GearTable1746545762188,
        PartyGearJoinTable1746545768956,
    ],
    extra: {
        connectionTimeoutMillis: 30000,
    },
})
