import { neon } from '@neondatabase/serverless';

let connectionString = process.env.DATABASE_URL || 'postgresql://db_user:db_password@localhost:5432/db_name';

// Strip surrounding quotes if present (handles balanced or unbalanced copy-paste quotes)
connectionString = connectionString.trim();
while (connectionString.startsWith('"') || connectionString.startsWith("'")) {
  connectionString = connectionString.slice(1).trim();
}
while (connectionString.endsWith('"') || connectionString.endsWith("'")) {
  connectionString = connectionString.slice(0, -1).trim();
}

export const sql = neon(connectionString);



export function getDb() {
  return sql;
}
