// "How would real users break this?" — five attack families, run against a live server.
//   node scripts/abuse-tests.mjs [baseUrl]        (default https://cadence.buildc3.tech)
// Creates throwaway accounts, deletes them all at the end. No secrets needed.
const B = process.argv[2] || 'https://cadence.buildc3.tech';
const tag = Date.now();
const J = (b, t) => ({ method: 'POST', headers: { 'Content-Type': 'application/json', ...(t ? { Authorization: 'Bearer ' + t } : {}) }, body: JSON.stringify(b) });
const H = (t) => ({ headers: { Authorization: 'Bearer ' + t } });
const accounts = []; // {email, token}
let pass = 0, fail = 0;
const ok = (name, v, extra = '') => { v ? pass++ : fail++; console.log(`  ${v ? 'PASS' : 'FAIL'}  ${name}${v ? '' : '  ← ' + extra}`); };
const signupRaw = (email, password = 'AbusePass12345', extra = {}) =>
  fetch(B + '/api/mobile/auth', J({ action: 'signup', email, password, name: 'Abuse', consent: true, ageConfirmed: true, ...extra }));
async function newUser(label) {
  const email = `abuse-${label}-${tag}@example.com`;
  const r = await signupRaw(email); const d = await r.json();
  if (!d.token) throw new Error('signup failed for ' + label + ': ' + JSON.stringify(d));
  accounts.push({ email, token: d.token });
  return { email, token: d.token };
}
const usage = async (t) => (await fetch(B + '/api/usage', H(t))).json();
const conv = (t, body) => fetch(B + '/api/conversation', J(body, t));
const goodConv = { messages: [{ who: 'p', n: 'Hola' }, { who: 'u', n: 'Un cafe' }], lang: 'Spanish', scenario: 'cafe', partnerName: 'L', persona: 'a barista', level: 'A1' };
const leaks = (txt) => /(neon|postgres|relation "|syntax error|at async|node_modules|duplicate key|violates|stack|TypeError|Cannot read)/i.test(txt);

// ───────────────────────────────────────────────────────────────────────────
console.log('\n1. RACE: a free user fires many requests at once to get past the daily limit');
{
  const u = await newUser('race');
  const rs = await Promise.all(Array.from({ length: 22 }, () => conv(u.token, goodConv)));
  const codes = rs.map((r) => r.status);
  const okN = codes.filter((c) => c === 200).length;
  const used = (await usage(u.token)).used.convo;
  ok('at most 15 of 22 simultaneous messages succeed', okN <= 15, `${okN} succeeded`);
  ok('server counter never exceeds the limit', used <= 15, `used=${used}`);
  ok('no request crashed (no 5xx)', !codes.some((c) => c >= 500), codes.join(','));
  const tts = await Promise.all(Array.from({ length: 4 }, () => fetch(B + '/api/tts', J({ text: 'a'.repeat(2900), lang: 'es' }, u.token))));
  ok('voice budget (5,000 chars) cannot be beaten by parallel calls (≤1 of 4 allowed)', tts.filter((r) => r.status === 200).length <= 1, tts.map((r) => r.status).join(','));
}

// ───────────────────────────────────────────────────────────────────────────
console.log('\n2. FORGERY: faking identity or upgrading yourself to Plus for free');
{
  const u = await newUser('forge');
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const none = `${b64({ alg: 'none', typ: 'JWT' })}.${b64({ userId: 'x', sub: 'x', email: 'a@b.c' })}.`;
  const tampered = u.token.slice(0, -4) + (u.token.slice(-4) === 'AAAA' ? 'BBBB' : 'AAAA');
  for (const [n, t] of [['no token', ''], ['garbage token', 'abc.def.ghi'], ['alg:none token', none], ['tampered signature', tampered]]) {
    const r = await fetch(B + '/api/usage', t ? H(t) : {});
    ok(`${n} → 401`, r.status === 401, 'status ' + r.status);
  }
  const r = await fetch(B + '/api/webhook', J({ isMock: true, action: 'upgrade', provider: 'mock' }, u.token));
  ok('"mock checkout" self-upgrade is refused', r.status >= 400, 'status ' + r.status + ' (self-upgrade accepted)');
  const r2 = await fetch(B + '/api/checkout', J({ provider: 'stripe' }, u.token));
  const b2 = await r2.text();
  ok('checkout does not hand out a fake "mock" payment page', !/"mock"\s*:\s*true/.test(b2), b2.slice(0, 120));
  const r3 = await fetch(B + '/api/webhook', J({ type: 'checkout.session.completed', data: { object: { metadata: { userId: 'x' } } } }));
  ok('unsigned payment webhook is rejected', r3.status >= 400, 'status ' + r3.status);
  const s = await usage(u.token);
  ok('after all that the account is still on the free plan', s.plan === 'free' && s.limits.convo === 15, JSON.stringify(s.plan));
}

// ───────────────────────────────────────────────────────────────────────────
console.log('\n3. ZOMBIE TOKEN: the user deletes the account but the old login token keeps working');
{
  const u = await newUser('zombie');
  const del = await fetch(B + '/api/account', { method: 'DELETE', ...H(u.token) });
  ok('account deletion succeeds', del.status === 200, 'status ' + del.status);
  accounts.splice(accounts.findIndex((a) => a.token === u.token), 1);
  const r1 = await fetch(B + '/api/usage', H(u.token));
  ok('old token no longer works on /api/usage', r1.status === 401, 'status ' + r1.status);
  const r2 = await conv(u.token, goodConv);
  ok('old token cannot use the AI after deletion', r2.status === 401, 'status ' + r2.status);
  const r3 = await fetch(B + '/api/mobile/auth', J({ action: 'login', email: u.email, password: 'AbusePass12345' }));
  ok('cannot log back in to a deleted account', r3.status >= 400, 'status ' + r3.status);
}

// ───────────────────────────────────────────────────────────────────────────
console.log('\n4. HOSTILE INPUT: garbage, giant, or malicious data into every endpoint');
{
  const u = await newUser('input');
  const before = (await usage(u.token)).used.convo;
  const bad = [
    ['messages is a string', { ...goodConv, messages: 'hello' }],
    ['messages is null', { ...goodConv, messages: null }],
    ['messages missing', { lang: 'Spanish' }],
    ['5,000 messages', { ...goodConv, messages: Array.from({ length: 5000 }, () => ({ who: 'u', n: 'hi' })) }],
    ['a 1 MB single message', { ...goodConv, messages: [{ who: 'u', n: 'x'.repeat(1_000_000) }] }],
    ['message entries are not objects', { ...goodConv, messages: [1, null, 'x'] }],
    ['prompt-injection in the persona field', { ...goodConv, persona: 'x'.repeat(50_000) }],
  ];
  for (const [n, body] of bad) {
    const r = await conv(u.token, body); const t = await r.text();
    ok(`conversation: ${n} → clean 4xx, no internals leaked`, r.status >= 400 && r.status < 500 && !leaks(t), `status ${r.status} ${t.slice(0, 90)}`);
  }
  const after = (await usage(u.token)).used.convo;
  ok('rejected requests did not burn the free quota', after === before, `${before} → ${after}`);
  const e1 = await fetch(B + '/api/tts', J({ text: 12345, lang: ['x'] }, u.token));
  ok('tts: wrong types → 4xx', e1.status >= 400 && e1.status < 500, 'status ' + e1.status);
  const fd = new FormData(); fd.append('lang', 'es');
  const e2 = await fetch(B + '/api/stt', { method: 'POST', headers: { Authorization: 'Bearer ' + u.token }, body: fd });
  ok('stt: missing audio → 400', e2.status === 400, 'status ' + e2.status);
  const used2 = (await usage(u.token)).used.stt;
  ok('stt: a request with no audio is not charged', used2 === 0, 'stt used=' + used2);
  const fd2 = new FormData(); fd2.append('lang', 'es'); fd2.append('file', new Blob([new Uint8Array(8 * 1024 * 1024)]), 'a.wav');
  const e3 = await fetch(B + '/api/stt', { method: 'POST', headers: { Authorization: 'Bearer ' + u.token }, body: fd2 });
  ok('stt: an 8 MB "recording" is refused (413/400), not forwarded', [400, 413].includes(e3.status), 'status ' + e3.status);
  const e4 = await fetch(B + '/api/plan', J({ lang: 'x'.repeat(5000) }, u.token));
  ok('plan: a 5,000-character language name is refused', e4.status === 400, 'status ' + e4.status);
  for (const [n, email, name] of [["SQL injection in email", "a'; DROP TABLE users;--@x.com", 'x'], ['10,000-char email', 'a'.repeat(10_000) + '@x.com', 'x'], ['script tag in name', `xss-${tag}@example.com`, '<script>alert(1)</script>'], ['null byte in email', 'a\u0000b@x.com', 'x']]) {
    const r = await signupRaw(email, 'AbusePass12345', { name }); const t = await r.text();
    let d = {}; try { d = JSON.parse(t); } catch {}
    if (d.token) accounts.push({ email, token: d.token });
    if (n === 'script tag in name') ok(`signup: ${n} is stored as plain text, not executed (response is JSON)`, r.headers.get('content-type')?.includes('json'), '');
    else ok(`signup: ${n} → refused cleanly`, r.status >= 400 && r.status < 500 && !leaks(t), `status ${r.status} ${t.slice(0, 90)}`);
  }
  const r5 = await fetch(B + '/api/mobile/auth', J({ action: 'login', email: "' OR '1'='1", password: "' OR '1'='1" }));
  ok('login: SQL-injection login fails', r5.status >= 400 && !leaks(await r5.text()), 'status ' + r5.status);
  const r6 = await signupRaw(`longpw-${tag}@example.com`, 'p'.repeat(200_000));
  ok('signup: a 200 KB password is refused quickly', r6.status >= 400 && r6.status < 500, 'status ' + r6.status);
}

// ───────────────────────────────────────────────────────────────────────────
console.log('\n5. ACCOUNT FARMING & BRUTE FORCE: many accounts for many free quotas; guessing passwords');
{
  const base = `farm-${tag}`;
  const a = await signupRaw(`${base}@Example.com`); const da = await a.json(); if (da.token) accounts.push({ email: `${base}@Example.com`, token: da.token });
  const b = await signupRaw(`${base}@example.com`); const db = await b.json(); if (db.token) accounts.push({ email: `${base}@example.com`, token: db.token });
  ok('same email in different CAPITALS is the same account (no 2nd free quota)', a.status === 200 && b.status >= 400, `second signup status ${b.status}`);
  const raceEmail = `dup-${tag}@example.com`;
  const rs = await Promise.all(Array.from({ length: 5 }, () => signupRaw(raceEmail)));
  const bodies = await Promise.all(rs.map((r) => r.text()));
  rs.forEach((r, i) => { try { const d = JSON.parse(bodies[i]); if (d.token) accounts.push({ email: raceEmail, token: d.token }); } catch {} });
  ok('5 simultaneous signups with one email → exactly 1 account', rs.filter((r) => r.status === 200).length === 1, rs.map((r) => r.status).join(','));
  ok('…and the losers get a friendly message, not a database error', !bodies.some(leaks), bodies.find(leaks)?.slice(0, 100) || '');
  const victim = `victim-${tag}@example.com`; const vr = await signupRaw(victim); const vd = await vr.json(); accounts.push({ email: victim, token: vd.token });
  const guesses = [];
  for (let i = 0; i < 14; i++) guesses.push(await fetch(B + '/api/mobile/auth', J({ action: 'login', email: victim, password: 'wrong-guess-' + i })));
  ok('password guessing is throttled (some of 14 rapid wrong guesses get blocked)', (await Promise.all(guesses.map((g) => g.json()))).some((d) => /too many/i.test(d.error || '')), 'never throttled');
  const flood = await Promise.all(Array.from({ length: 30 }, (_, i) => signupRaw(`flood-${i}-${tag}@example.com`, 'FloodPass12345')));
  const fd = await Promise.all(flood.map((r) => r.json().catch(() => ({}))));
  fd.forEach((d, i) => { if (d.token) accounts.push({ email: `flood-${i}-${tag}@example.com`, token: d.token }); });
  const made = fd.filter((d) => d.token).length;
  ok('one visitor cannot mass-create accounts (30 rapid signups → fewer than 30 created)', made < 30, `${made} of 30 created`);
}

// ───────────────────────────────────────────────────────────────────────────
console.log('\nCleaning up test accounts…');
let cleaned = 0;
for (const a of accounts) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(B + '/api/account', { method: 'DELETE', ...H(a.token) });
    if (r.status === 200) { cleaned++; break; }
    if (r.status === 401) break;
    await new Promise((s) => setTimeout(s, 1500));
  }
}
console.log(`deleted ${cleaned}/${accounts.length} test accounts`);
console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
