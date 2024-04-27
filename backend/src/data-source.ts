import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
type: "postgres",
host: "kashin.db.elephantsql.com",
port: 5432,
username: "lsfusjdm",
password: "fLmjI8oj_SIKSdxXpDJiyLKc1jTEHTKU",
database: "lsfusjdm",
synchronize: true,
logging: false,
entities: [User],
migrations: [],
subscribers: [],
});