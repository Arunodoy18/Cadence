import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    if (!rateLimit(`push-register:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const { token, platform } = await req.json();
    if (!token || (platform !== 'ios' && platform !== 'android')) {
      return NextResponse.json({ error: 'A valid token and platform (ios or android) are required' }, { status: 400 });
    }

    // A device token is unique per install — re-registering (e.g. after a
    // different account logs in on the same device) should move the token
    // to the new user, not create a duplicate row.
    await sql`
      INSERT INTO push_tokens (id, user_id, token, platform)
      VALUES (${uuidv4()}, ${user.id}, ${token}, ${platform})
      ON CONFLICT (token) DO UPDATE SET user_id = ${user.id}, platform = ${platform}
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Push token registration error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ error: 'A token is required' }, { status: 400 });
    }

    // Only ever unregister a token belonging to the caller's own account.
    await sql`DELETE FROM push_tokens WHERE token = ${token} AND user_id = ${user.id}`;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Push token unregistration error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
