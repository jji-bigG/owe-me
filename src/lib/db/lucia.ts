import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import { db } from "$lib/db/db.server";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./schemas/user";

// const userTable = pgTable("user", {
//   id: text("id").primaryKey(),
// });

const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: !dev,
    },
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}
