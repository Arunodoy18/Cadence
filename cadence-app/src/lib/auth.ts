import { getServerSession } from 'next-auth';
import { decode } from 'next-auth/jwt';
import { headers } from 'next/headers';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { NextResponse } from 'next/server';

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
      plan: 'plus',
    };
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const bearerUser = await getBearerUser();
  if (bearerUser) return { error: null, user: bearerUser };

  const session = await getSession();
  if (!session?.user) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }), user: null };
  }
  return { error: null, user: session.user as unknown as SessionUser };
}

// Cadence has no paid tier — every feature is open to every signed-in user.
// Kept as a named export so the (many) call sites don't change.
export const requirePlus = requireAuth;
