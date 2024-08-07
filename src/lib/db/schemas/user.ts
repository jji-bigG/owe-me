import { sql } from "drizzle-orm";
import { serial, text, timestamp, varchar, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique(),
  name: varchar("name", { length: 255 }),
  username: varchar("username", { length: 31 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});
