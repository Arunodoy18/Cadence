// One-off: downloads the Google Fonts the app uses into public/fonts so the
// native app renders them offline and instantly (no runtime request to Google).
// CJK (JP/KR/SC) is intentionally left to the phone's built-in system CJK font —
// shipping those families would add many MB for no visible gain on Android.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const UA = 'Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36';
const families = [
  'Instrument+Serif:ital@0;1',
  'Hanken+Grotesk:ital,wght@0,300..800;1,400..600',
  'Noto+Sans:wght@400..700',
  'Noto+Sans+Devanagari:wght@400..700',
  'Noto+Sans+Arabic:wght@400..700',
  'Noto+Sans+Thai:wght@400..700',
  'Noto+Sans+Hebrew:wght@400..700',
  'Noto+Sans+Bengali:wght@400..700',
];
const url = 'https://fonts.googleapis.com/css2?' + families.map((f) => 'family=' + f).join('&') + '&display=swap';
const css = await (await fetch(url, { headers: { 'User-Agent': UA } })).text();

const outDir = path.resolve('public/fonts');
await mkdir(outDir, { recursive: true });
let out = css;
const seen = new Map();
for (const m of css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)) {
  const src = m[1];
  if (seen.has(src)) continue;
  const name = path.basename(new URL(src).pathname);
  seen.set(src, name);
  await writeFile(path.join(outDir, name), Buffer.from(await (await fetch(src)).arrayBuffer()));
}
for (const [src, name] of seen) out = out.split(src).join('/fonts/' + name);
await writeFile(path.resolve('public/fonts/fonts.css'), out);
console.log(`Saved ${seen.size} font files`);
