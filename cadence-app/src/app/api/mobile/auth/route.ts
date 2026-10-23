import { NextRequest, NextResponse } from 'next/server';
import { encode } from 'next-auth/jwt';
import { authorizeCredentials, AuthError } from '@/lib/credentials';
import { hitLimit } from '@/lib/usage';
import { requireAuth } from '@/lib/auth';

const MAX_AGE = 30 * 24 * 60 * 60; // 30 days, same as the web session

// Token-based sign-in/sign-up for the native app.
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) return NextResponse.json({ error: 'Server is not configured' }, { status: 500 });

    const body = await req.json();
    if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid request' }, { status: 400 });

    // One visitor (IP) can't mass-create accounts to farm free AI quotas or hammer logins.
    // Netlify sets x-nf-client-connection-ip; fall back to the first x-forwarded-for hop.
    const ip = (req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
    const signup = body.action === 'signup';
    if (!(await hitLimit(`${signup ? 'signup' : 'login'}-ip:${ip}`, signup ? 25 : 60, signup ? 3600 : 60))) {
      return NextResponse.json({ error: 'Too many attempts from your network. Please try again later.' }, { status: 429 });
    }

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
    // AuthError messages are user-facing (bad password, etc.); anything else is internal — don't leak it.
    if (e instanceof AuthError) return NextResponse.json({ error: e.message }, { status: 400 });
    console.error('mobile auth error:', e);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: e instanceof SyntaxError ? 400 : 500 });
  }
}

// Restore a session on app launch: validates the stored token and returns the user.
export async function GET() {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  return NextResponse.json({ user: auth.user });
}
