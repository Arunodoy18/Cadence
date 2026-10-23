// Usage: node scripts/grant-plus.mjs <email> [days]   (days omitted = no expiry)
// Grants (or with "revoke") removes Cadence Plus for a user. Uses DATABASE_URL from .env.local.
import 'dotenv/config';
import { config } from 'dotenv'; config({ path: new URL('../.env.local', import.meta.url).pathname });
import { neon } from '@neondatabase/serverless';
const [, , email, arg] = process.argv;
if (!email) { console.error('usage: node scripts/grant-plus.mjs <email> [days|revoke]'); process.exit(1); }
const sql = neon(process.env.DATABASE_URL.replace(/^["']|["']$/g, ''));
const [u] = await sql`SELECT id FROM users WHERE email = ${email}`;
if (!u) { console.error('no such user'); process.exit(1); }
if (arg === 'revoke') {
  await sql`UPDATE entitlements SET status = 'revoked' WHERE user_id = ${u.id}`;
  console.log('revoked');
} else {
  const days = arg ? Number(arg) : null;
  await sql`INSERT INTO entitlements (user_id, plan, source, status, expires_at)
            VALUES (${u.id}, 'plus', 'manual', 'active', ${days ? new Date(Date.now() + days * 864e5).toISOString() : null})`;
  console.log('granted plus', days ? `for ${days} days` : '(no expiry)');
}
