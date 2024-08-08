import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { SECRET_POSTGRES_URL } from "$env/static/private";
import { user } from "./schemas/user";

const client = postgres(SECRET_POSTGRES_URL);

export const db = drizzle(client, {
  schema: {
    user,
  },
});
