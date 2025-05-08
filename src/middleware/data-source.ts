import dataSource from '../persistance/data-source'

export const dataSourceMiddleware = () => ({
    before: async () => {
        if (!dataSource.isInitialized) {
            console.log('Initializing data source')
            await dataSource.initialize()
            console.log('Data source initialized')
            await dataSource.runMigrations()
            console.log('Migrations run')
        }
    },
})
