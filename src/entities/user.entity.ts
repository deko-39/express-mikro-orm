import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";

@Entity()
export class User {
  constructor(private user?: Partial<User>) {
    Object.assign(this, user);
  }

  @PrimaryKey()
  id: string = v4();

  @Property()
  name!: string;

  @Property()
  phone!: number;

  @Property()
  address!: string;
}
