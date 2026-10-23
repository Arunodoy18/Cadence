import { getServerSession } from 'next-auth';
import { decode } from 'next-auth/jwt';
import { headers } from 'next/headers';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

type SessionUser = { id: string; email: string; name: string; plan: string };

export async function getSession() {
  return await getServerSession(authOptions);
}

// The native app has no cookie jar to lean on (its UI is served from a
// different origin than this API), so it authenticates with a signed JWT in
// an Authorization: Bearer header. Web/session-cookie auth still works.
async function getBearerUser(): Promise<SessionUser | null> {
  const authorization = (await headers()).get('authorization');
  if (!authorization?.toLowerCase().startsWith('bearer ')) return null;
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) return null;
  try {
    const token = await decode({ token: authorization.slice(7).trim(), secret });
    if (!token?.userId) return null;
    return {
      id: token.userId as string,
      email: (token.email as string) || '',
      name: (token.name as string) || '',
      plan: 'free',
    };
  } catch {
    return null;
  }
}

const unauthorized = () => ({ error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }), user: null });

// A signed token proves who you were when you signed in — not that the account still exists.
// Without this check, a deleted user's token would keep working for the rest of its 30 days.
async function userStillExists(id: string): Promise<boolean> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return false;
  const rows = await sql`SELECT 1 FROM users WHERE id = ${id}`;
  return rows.length > 0;
}

export async function requireAuth() {
  const bearerUser = await getBearerUser();
  if (bearerUser) {
    return (await userStillExists(bearerUser.id)) ? { error: null, user: bearerUser } : unauthorized();
  }

  const session = await getSession();
  if (!session?.user) return unauthorized();
  const user = session.user as unknown as SessionUser;
  return (await userStillExists(user.id)) ? { error: null, user } : unauthorized();
}

// Kept as a named export so the (many) call sites don't change. Plan limits are enforced
// separately, per feature, in usage.ts.
export const requirePlus = requireAuth;
