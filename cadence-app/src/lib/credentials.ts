import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { rateLimit } from '@/lib/rateLimit';

// Bump when the privacy notice / consent wording changes materially, so we
// can tell which version of the notice each user actually agreed to.
export const CONSENT_VERSION = '2026-10-dpdp-v1';

export type CredentialsInput = {
  email?: string;
  password?: string;
  name?: string;
  action?: string;
  consent?: boolean | string;
  ageConfirmed?: boolean | string;
};

export type AuthedUser = { id: string; email: string; name: string; plan: string };

// DPDP Act, 2023: consent must be free, specific, informed and recorded.
// These columns store who consented, when, and to which notice version.
// Added lazily (idempotent) so no manual migration step is needed on deploy.
let consentColumnsReady: Promise<unknown> | null = null;
export function ensureConsentColumns() {
  if (!consentColumnsReady) {
    consentColumnsReady = (async () => {
      await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS consent_at timestamptz`;
      await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS consent_version text`;
      await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS age_confirmed boolean DEFAULT false`;
    })().catch((e) => {
      consentColumnsReady = null;
      throw e;
    });
  }
  return consentColumnsReady;
}

const truthy = (v: unknown) => v === true || v === 'true';

export async function authorizeCredentials(input: CredentialsInput): Promise<AuthedUser> {
  const { email, password, name, action } = input;
  if (!email || !password) throw new Error('Email and password are required');

  if (!rateLimit(`auth:${email.toLowerCase()}`, 10, 60_000)) {
    throw new Error('Too many attempts. Please wait a minute and try again.');
  }

  if (action === 'signup') {
    if (!truthy(input.consent)) {
      throw new Error('Please accept the Privacy Notice to create an account');
    }
    if (!truthy(input.ageConfirmed)) {
      throw new Error('Please confirm you are 18 or older, or have a parent or guardian\'s consent');
    }
    if (password.length < 8) throw new Error('Password must be at least 8 characters');

    await ensureConsentColumns();

    const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
    if (existing.length > 0) throw new Error('An account with this email already exists');

    const passwordHash = await bcrypt.hash(password, 12);
    const id = uuidv4();
    const displayName = name || email.split('@')[0];
    // Every feature is available to every user — there are no paid tiers.
    await sql`
      INSERT INTO users (id, email, name, password_hash, auth_provider, plan, consent_at, consent_version, age_confirmed)
      VALUES (${id}, ${email}, ${displayName}, ${passwordHash}, 'email', 'plus', now(), ${CONSENT_VERSION}, true)
    `;
    return { id, email, name: displayName, plan: 'plus' };
  }

  const users = await sql`SELECT id, email, name, password_hash FROM users WHERE email = ${email}`;
  if (users.length === 0) throw new Error('No account found with this email');
  const user = users[0];
  if (!user.password_hash) throw new Error('This account uses social login');
  if (!(await bcrypt.compare(password, user.password_hash))) throw new Error('Invalid password');
  return { id: user.id, email: user.email, name: user.name, plan: 'plus' };
}
