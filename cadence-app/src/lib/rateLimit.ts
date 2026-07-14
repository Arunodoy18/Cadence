// Best-effort in-memory rate limiter. Netlify/Next serverless functions can
// scale across multiple isolated instances, so this does NOT provide a hard
// global guarantee — but it stops a single warm instance being hammered by
// one user/IP, which is the realistic abuse pattern for the metered AI
// endpoints (OpenAI/Azure/ElevenLabs calls). For a hard guarantee, back this
// with a shared store (e.g. Upstash Redis) instead.

const buckets = new Map<string, number[]>();
const MAX_BUCKETS = 5000;

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  let hits = buckets.get(key);
  if (!hits) {
    if (buckets.size >= MAX_BUCKETS) {
      // Cheap eviction so this can't grow unbounded across a long-lived instance.
      const oldestKey = buckets.keys().next().value;
      if (oldestKey !== undefined) buckets.delete(oldestKey);
    }
    hits = [];
    buckets.set(key, hits);
  }

  while (hits.length > 0 && hits[0] < windowStart) hits.shift();

  if (hits.length >= limit) return false;

  hits.push(now);
  return true;
}
