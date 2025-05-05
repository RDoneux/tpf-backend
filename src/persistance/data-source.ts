import { DataSource } from "typeorm";
import { ExampleEntity } from "../entities/example.entity";

let dataSource: DataSource | null = null;

export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ExampleEntity],
      logging: true,
      synchronize: false,
      extra: {
        connectionTimeoutMillis: 30000
      }
    });
    await dataSource.initialize();
  }
  return dataSource;
};