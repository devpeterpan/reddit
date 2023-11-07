import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "host.docker.internal",
    port: 5433,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    migrations: [],
    subscribers: [],
})
