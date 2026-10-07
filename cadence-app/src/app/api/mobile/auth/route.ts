import { NextRequest, NextResponse } from 'next/server';
import { encode } from 'next-auth/jwt';
import { authorizeCredentials } from '@/lib/credentials';
import { requireAuth } from '@/lib/auth';

const MAX_AGE = 30 * 24 * 60 * 60; // 30 days, same as the web session

// Token-based sign-in/sign-up for the native app.
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) return NextResponse.json({ error: 'Server is not configured' }, { status: 500 });

    const body = await req.json();
    const user = await authorizeCredentials({
      email: typeof body.email === 'string' ? body.email.trim() : undefined,
      password: body.password,
      name: typeof body.name === 'string' ? body.name.trim() : undefined,
      action: body.action === 'signup' ? 'signup' : 'login',
      consent: body.consent,
      ageConfirmed: body.ageConfirmed,
    });

    const token = await encode({
      token: { sub: user.id, userId: user.id, email: user.email, name: user.name, plan: user.plan },
      secret,
      maxAge: MAX_AGE,
    });
    return NextResponse.json({ token, user });
  } catch (e: any) {
    // authorizeCredentials throws user-facing messages (bad password, etc.)
    return NextResponse.json({ error: e?.message || 'Sign-in failed' }, { status: 400 });
  }
}

// Restore a session on app launch: validates the stored token and returns the user.
export async function GET() {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  return NextResponse.json({ user: auth.user });
}
