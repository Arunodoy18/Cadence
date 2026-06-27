import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    const { lang } = await req.json();
    if (!lang) {
      return NextResponse.json({ error: 'Language is required' }, { status: 400 });
    }

    // Get enrollment for this user and language
    const enrollments = await sql`
      SELECT id FROM enrollments 
      WHERE user_id = ${user.id} AND lang = ${lang}
    `;

    if (enrollments.length === 0) {
      return NextResponse.json({ milestones: [] }, { status: 200 });
    }

    const enrollment = enrollments[0];

    // Fetch earned milestones
    const milestones = await sql`
      SELECT key, earned_at 
      FROM milestones 
      WHERE enrollment_id = ${enrollment.id}
    `;

    return NextResponse.json({ milestones });
  } catch (error: any) {
    console.error('Milestones API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
