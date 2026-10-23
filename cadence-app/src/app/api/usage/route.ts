import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { usageSnapshot } from '@/lib/usage';

export async function GET() {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  return NextResponse.json(await usageSnapshot(auth.user!.id));
}
