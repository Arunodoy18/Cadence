import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { NextResponse } from 'next/server';

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }), user: null };
  }
  return { error: null, user: session.user as { id: string; email: string; name: string; plan: string } };
}

export async function requirePlus() {
  const auth = await requireAuth();
  if (auth.error) return auth;
  if (auth.user!.plan !== 'plus') {
    return { error: NextResponse.json({ error: 'This feature requires Cadence Plus' }, { status: 403 }), user: null };
  }
  return auth;
}
