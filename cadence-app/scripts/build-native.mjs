// Builds the static UI bundle (./out) that Capacitor packs into the APK.
// Next's static export can't contain API routes or the proxy, so those are
// moved aside for the duration of the build and always restored afterwards.
import { renameSync, existsSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://cadence.buildc3.tech';
const aside = [
  ['src/app/api', '.native-build-aside/api'],
  ['src/proxy.ts', '.native-build-aside/proxy.ts'],
  // Server-only libraries — they import the API routes / database, so the
  // static build's type-check must not see them.
  ['src/lib/auth.ts', '.native-build-aside/auth.ts'],
  ['src/lib/credentials.ts', '.native-build-aside/credentials.ts'],
  ['src/lib/db.ts', '.native-build-aside/db.ts'],
  ['src/lib/push.ts', '.native-build-aside/push.ts'],
  ['src/lib/rateLimit.ts', '.native-build-aside/rateLimit.ts'],
  ['src/lib/migrate.ts', '.native-build-aside/migrate.ts'],
];

import { mkdirSync } from 'node:fs';
mkdirSync('.native-build-aside', { recursive: true });
const moved = [];
let status = 1;
try {
  for (const [from, to] of aside) {
    if (existsSync(from)) { renameSync(from, to); moved.push([from, to]); }
  }
  rmSync('out', { recursive: true, force: true });
  const r = spawnSync('npx', ['next', 'build'], {
    stdio: 'inherit',
    env: { ...process.env, CADENCE_NATIVE: '1', NEXT_PUBLIC_API_BASE: API_BASE },
  });
  status = r.status ?? 1;
} finally {
  for (const [from, to] of moved) renameSync(to, from);
  rmSync('.native-build-aside', { recursive: true, force: true });
}
process.exit(status);
