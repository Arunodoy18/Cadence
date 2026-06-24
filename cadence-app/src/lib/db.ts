import { neon } from '@neondatabase/serverless';

let connectionString = process.env.DATABASE_URL || 'postgresql://db_user:db_password@localhost:5432/db_name';

// Strip surrounding quotes if present (common when copy-pasting from .env files)
connectionString = connectionString.trim();
if (
  (connectionString.startsWith('"') && connectionString.endsWith('"')) ||
  (connectionString.startsWith("'") && connectionString.endsWith("'"))
) {
  connectionString = connectionString.slice(1, -1).trim();
}

export const sql = neon(connectionString);


export function getDb() {
  return sql;
}
