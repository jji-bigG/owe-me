"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var better_sqlite3_1 = require("drizzle-orm/better-sqlite3");
var migrator_1 = require("drizzle-orm/better-sqlite3/migrator");
var postgres_1 = require("postgres");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var migrateClient = (0, postgres_1.default)(process.env.SECRET_POSTGRES_URL, {
    max: 1,
});
// run the migrations
await (0, migrator_1.migrate)((0, better_sqlite3_1.drizzle)(migrateClient), { migrationsFolder: "migrations" });
