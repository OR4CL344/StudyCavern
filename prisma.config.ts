import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  // Prisma 7+: connection string must live in prisma.config.ts
  datasource: {
    url: env("DATABASE_URL"),
  },

  // optional but nice to be explicit
  migrations: {
    path: "prisma/migrations",
  },
});
