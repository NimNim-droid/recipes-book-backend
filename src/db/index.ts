import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { ENV } from "@/config/env";
import * as schema from "./schema";
const cleanDbUrl = ENV.DATABASE_URL.replace(/[?&]channel_binding=require/g, '');

export const pool = new Pool({
  connectionString: cleanDbUrl,
  ssl: { rejectUnauthorized: false },
});

export const db = drizzle({ client: pool, schema });

