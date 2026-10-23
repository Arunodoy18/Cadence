import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { LIMITS, type Plan, type UsageKind } from '@/lib/plans';

// ---- schema (created on first use; additive and idempotent) ---------------
let ready: Promise<unknown> | null = null;
export function ensureBillingTables() {
  if (!ready) {
    ready = (async () => {
      await sql`CREATE TABLE IF NOT EXISTS usage_daily (
        user_id uuid REFERENCES users(id) ON DELETE CASCADE,
        day date NOT NULL, kind text NOT NULL, used int NOT NULL DEFAULT 0,
        PRIMARY KEY (user_id, day, kind))`;
      await sql`CREATE TABLE IF NOT EXISTS entitlements (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid REFERENCES users(id) ON DELETE CASCADE,
        plan text NOT NULL DEFAULT 'plus', source text, status text NOT NULL DEFAULT 'active',
        expires_at timestamptz, created_at timestamptz DEFAULT now())`;
      await sql`CREATE INDEX IF NOT EXISTS idx_entitlements_user ON entitlements(user_id)`;
      await sql`CREATE TABLE IF NOT EXISTS plus_waitlist (
        user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
        created_at timestamptz DEFAULT now())`;
      await sql`CREATE TABLE IF NOT EXISTS rate_hits (
        key text NOT NULL, bucket bigint NOT NULL, n int NOT NULL DEFAULT 0,
        PRIMARY KEY (key, bucket))`;
    })().catch((e) => { ready = null; throw e; });
  }
  return ready;
}

// Shared (database-backed) rate limit for the abuse-prone auth endpoints. The in-memory limiter
// in rateLimit.ts resets on every serverless instance, so it can't stop a determined script.
// Returns false once `key` has been hit more than `limit` times in the current window (windows must be ≤ 1 hour).
export async function hitLimit(key: string, limit: number, windowSec: number): Promise<boolean> {
  await ensureBillingTables();
  const now = Math.floor(Date.now() / 1000);
  const bucket = Math.floor(now / windowSec) * windowSec; // window start, in epoch seconds (comparable across windows)
  const rows = await sql`
    INSERT INTO rate_hits (key, bucket, n) VALUES (${key}, ${bucket}, 1)
    ON CONFLICT (key, bucket) DO UPDATE SET n = rate_hits.n + 1
    RETURNING n`;
  if (Math.random() < 0.02) { try { await sql`DELETE FROM rate_hits WHERE bucket < ${now - 7200}`; } catch {} }
  return (rows[0]?.n as number) <= limit;
}

// Limits reset at midnight India time (the main audience).
const IST_MS = 5.5 * 3600 * 1000;
export const istDay = (d = new Date()) => new Date(d.getTime() + IST_MS).toISOString().slice(0, 10);
export function nextResetISO(d = new Date()) {
  const ist = new Date(d.getTime() + IST_MS);
  const next = Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate() + 1) - IST_MS;
  return new Date(next).toISOString();
}

// Set ENFORCE_FREE_LIMITS=false to count usage without blocking anyone.
const enforce = () => process.env.ENFORCE_FREE_LIMITS !== 'false';

export async function getPlan(userId: string): Promise<Plan> {
  await ensureBillingTables();
  const rows = await sql`
    SELECT 1 FROM entitlements
    WHERE user_id = ${userId} AND status = 'active' AND plan = 'plus'
      AND (expires_at IS NULL OR expires_at > now()) LIMIT 1`;
  return rows.length ? 'plus' : 'free';
}

export type Charge =
  | { ok: true; plan: Plan; used: number; limit: number }
  | { ok: false; plan: Plan; used: number; limit: number };

// Atomically adds `units` to today's counter — only if it stays within the limit.
export async function consume(userId: string, kind: UsageKind, units = 1): Promise<Charge> {
  const plan = await getPlan(userId);
  const limit = enforce() ? LIMITS[plan][kind] : 2_000_000_000;
  const day = istDay();
  if (units > limit) return { ok: false, plan, used: 0, limit };
  const rows = await sql`
    INSERT INTO usage_daily (user_id, day, kind, used) VALUES (${userId}, ${day}, ${kind}, ${units})
    ON CONFLICT (user_id, day, kind) DO UPDATE SET used = usage_daily.used + ${units}
    WHERE usage_daily.used + ${units} <= ${limit}
    RETURNING used`;
  if (rows.length) return { ok: true, plan, used: rows[0].used as number, limit };
  const cur = await sql`SELECT used FROM usage_daily WHERE user_id = ${userId} AND day = ${day} AND kind = ${kind}`;
  return { ok: false, plan, used: (cur[0]?.used as number) ?? 0, limit };
}

// Give the unit back if the paid-for work failed on our side.
export async function refund(userId: string, kind: UsageKind, units = 1) {
  try {
    await sql`UPDATE usage_daily SET used = GREATEST(0, used - ${units}) WHERE user_id = ${userId} AND day = ${istDay()} AND kind = ${kind}`;
  } catch {}
}

export function limitResponse(kind: UsageKind, c: Charge) {
  return NextResponse.json(
    { error: 'You have used today’s free practice.', code: 'limit_reached', kind, plan: c.plan, used: c.used, limit: c.limit, resetsAt: nextResetISO() },
    { status: 402 }
  );
}

export async function usageSnapshot(userId: string) {
  const plan = await getPlan(userId);
  const rows = await sql`SELECT kind, used FROM usage_daily WHERE user_id = ${userId} AND day = ${istDay()}`;
  const used: Record<string, number> = { convo: 0, pron: 0, stt: 0, tts: 0 };
  for (const r of rows) used[r.kind as string] = r.used as number;
  return { plan, enforced: enforce(), limits: LIMITS[plan], used, resetsAt: nextResetISO() };
}
