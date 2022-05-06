import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { User } from "./entities/user.entity";

export default class OrmConnection {
  static async getConnection() {
    return MikroORM.init<PostgreSqlDriver>({
      type: "postgresql",
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "postgres",
      dbName: "nestDB",
      entities: [User],
      migrations: {
        tableName: "migrations",
        pathTs: "./migrations",
        transactional: true,
        allOrNothing: true,
        snapshot: true,
      },
    });
  }
}
