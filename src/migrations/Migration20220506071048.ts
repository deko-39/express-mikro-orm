import { Migration } from '@mikro-orm/migrations';

export class Migration20220506071048 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" varchar(255) not null, "name" varchar(255) not null, "phone" int not null, "address" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
