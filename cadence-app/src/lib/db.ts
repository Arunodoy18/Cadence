import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL || 'postgresql://db_user:db_password@localhost:5432/db_name';

export const sql = neon(connectionString);

export function getDb() {
  return sql;
}
