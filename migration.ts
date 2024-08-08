import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();

const migrateClient = postgres(process.env.SECRET_POSTGRES_URL as string, {
  max: 1,
});

// run the migrations
await migrate(drizzle(migrateClient), { migrationsFolder: "migrations" });
