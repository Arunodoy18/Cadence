import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { rateLimit } from '@/lib/rateLimit';
import { hitLimit } from '@/lib/usage';

// Bump when the privacy notice / consent wording changes materially, so we
// can tell which version of the notice each user actually agreed to.
export const CONSENT_VERSION = '2026-10-dpdp-v1';

// A message that is safe to show to the user (anything else is treated as an internal error).
export class AuthError extends Error {}

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

const EMAIL_RE = /^[^\s@\u0000]+@[^\s@\u0000]+\.[^\s@\u0000]+$/;

export async function authorizeCredentials(input: CredentialsInput): Promise<AuthedUser> {
  const { password, action } = input;
  // One account per person: emails are case-insensitive, so store/compare them lower-cased.
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  const name = typeof input.name === 'string' ? input.name.trim() : undefined;
  if (!email || typeof password !== 'string' || !password) throw new AuthError('Email and password are required');
  if (email.length > 254 || !EMAIL_RE.test(email)) throw new AuthError('Please enter a valid email address');
  if (password.length > 128) throw new AuthError('Password is too long (max 128 characters)');
  if (name && name.length > 80) throw new AuthError('Name is too long (max 80 characters)');

  if (!rateLimit(`auth:${email}`, 10, 60_000) || !(await hitLimit(`auth:${email}`, 10, 60))) {
    throw new AuthError('Too many attempts. Please wait a minute and try again.');
  }

  if (action === 'signup') {
    if (!truthy(input.consent)) {
      throw new AuthError('Please accept the Privacy Notice to create an account');
    }
    if (!truthy(input.ageConfirmed)) {
      throw new AuthError('Please confirm you are 18 or older, or have a parent or guardian\'s consent');
    }
    if (password.length < 8) throw new AuthError('Password must be at least 8 characters');

    await ensureConsentColumns();

    const existing = await sql`SELECT id FROM users WHERE lower(email) = ${email}`;
    if (existing.length > 0) throw new AuthError('An account with this email already exists');

    const passwordHash = await bcrypt.hash(password, 12);
    const id = uuidv4();
    const displayName = name || email.split('@')[0];
    // Every user starts on the free plan; Plus is granted through the entitlements table.
    try {
      await sql`
        INSERT INTO users (id, email, name, password_hash, auth_provider, plan, consent_at, consent_version, age_confirmed)
        VALUES (${id}, ${email}, ${displayName}, ${passwordHash}, 'email', 'free', now(), ${CONSENT_VERSION}, true)
      `;
    } catch (e: any) {
      // Two simultaneous sign-ups with the same email: the unique index lets only one win.
      if (e?.code === '23505') throw new AuthError('An account with this email already exists');
      throw e;
    }
    return { id, email, name: displayName, plan: 'free' };
  }

  const users = await sql`SELECT id, email, name, password_hash FROM users WHERE lower(email) = ${email}`;
  if (users.length === 0) throw new AuthError('No account found with this email');
  const user = users[0];
  if (!user.password_hash) throw new AuthError('This account uses social login');
  if (!(await bcrypt.compare(password, user.password_hash))) throw new AuthError('Invalid password');
  return { id: user.id, email: user.email, name: user.name, plan: 'free' };
}
