import { User } from "./entities/user.entity";

export default {
  type: "postgresql",
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  dbName: "nestDB",
  entities: [User],
  migrations: {
    tableName: "migrations",
    pathTs: "./src/migrations",
    transactional: true,
    allOrNothing: true,
    snapshot: true,
  },
};
