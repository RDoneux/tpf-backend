import { DataSource } from 'typeorm'
import { PartyTable1746543493483 } from './1746543493483-party-table'
import { HeroTable1746543904662 } from './1746543904662-hero-table'
import { PartyHeroJoinTable1746543940852 } from './1746543940852-party-hero-join-table'
import { PossessionTable1746545740723 } from './1746545740723-possession-table'
import { PartyPossessionJoinTable1746545754133 } from './1746545754133-party-possession-join-table'
import { GearTable1746545762188 } from './1746545762188-gear-table'
import { PartyGearJoinTable1746545768956 } from './1746545768956-party-gear-join-table'
import { PartyEntity } from '../entities/party.entity'
import { GearEntity } from '../entities/gear.entity'
import { PossessionEntity } from '../entities/possession.entity'
import { PartyGearView1746737217909 } from './1746737217909-party-gear-view'
import { PartyGearViewEntity } from '../entities/party-gear-view.entity'
import { PartyPosessionView1746774580361 } from './1746774580361-party-posession-view'
import { PartyPossessionViewEntity } from '../entities/party-possession-view.entity'

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [PartyEntity, GearEntity, PossessionEntity, PartyGearViewEntity, PartyPossessionViewEntity],
    logging: ['query', 'error'],
    migrations: [
        PartyTable1746543493483,
        HeroTable1746543904662,
        PartyHeroJoinTable1746543940852,
        PossessionTable1746545740723,
        PartyPossessionJoinTable1746545754133,
        GearTable1746545762188,
        PartyGearJoinTable1746545768956,
        PartyGearView1746737217909,
        PartyPosessionView1746774580361,
    ],
    extra: {
        max: 10,
        connectionTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
    },
})
