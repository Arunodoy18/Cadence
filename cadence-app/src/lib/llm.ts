import OpenAI from 'openai';

// One chat-completion entry point for the whole app. Every provider here speaks
// the OpenAI-compatible API, so switching is just environment variables — no
// code change. Providers are tried in this order; the first that answers wins,
// so a dead/unbilled key never takes the AI features down by itself:
//
//   1. LLM_API_KEY (+ LLM_BASE_URL, LLM_MODEL) — any OpenAI-compatible service
//   2. GROQ_API_KEY    — free tier, very fast (Llama 3.3 70B)
//   3. GEMINI_API_KEY  — free tier (Google AI Studio)
//   4. OPENAI_API_KEY  — paid
type Provider = { name: string; client: OpenAI; model: string; jsonMode: boolean };

function configuredProviders(): Provider[] {
  const out: Provider[] = [];
  const env = process.env;

  if (env.LLM_API_KEY) {
    out.push({
      name: 'custom',
      client: new OpenAI({ apiKey: env.LLM_API_KEY, baseURL: env.LLM_BASE_URL }),
      model: env.LLM_MODEL || 'gpt-4o-mini',
      jsonMode: false,
    });
  }
  if (env.GROQ_API_KEY) {
    out.push({
      name: 'groq',
      client: new OpenAI({ apiKey: env.GROQ_API_KEY, baseURL: 'https://api.groq.com/openai/v1' }),
      model: env.GROQ_MODEL || 'llama-3.3-70b-versatile',
      jsonMode: true,
    });
  }
  if (env.GEMINI_API_KEY) {
    out.push({
      name: 'gemini',
      client: new OpenAI({
        apiKey: env.GEMINI_API_KEY,
        baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
      }),
      model: env.GEMINI_MODEL || 'gemini-2.0-flash',
      jsonMode: false,
    });
  }
  const openaiKey = env.OPENAI_API_KEY || env.OPEN_AI_API;
  if (openaiKey) {
    out.push({
      name: 'openai',
      client: new OpenAI({ apiKey: openaiKey }),
      model: env.OPENAI_MODEL || 'gpt-4o',
      jsonMode: true,
    });
  }
  return out;
}

// Pulls a JSON object out of a model reply, tolerating code fences / chatter.
export function parseJsonLoose(raw: string): Record<string, any> | null {
  try {
    return JSON.parse(raw);
  } catch {
    const a = raw.indexOf('{');
    const b = raw.lastIndexOf('}');
    if (a >= 0 && b > a) {
      try {
        return JSON.parse(raw.slice(a, b + 1));
      } catch {}
    }
    return null;
  }
}

export async function chatJSON(
  messages: { role: 'system' | 'user' | 'assistant'; content: string }[],
  opts: { maxTokens: number; temperature: number }
): Promise<Record<string, any> | null> {
  const providers = configuredProviders();
  if (providers.length === 0) throw new Error('No AI provider is configured on the server');

  // Some providers (Gemini) reject a conversation that has no user turn — which
  // is exactly what the AI's opening line is. Nudge it to start.
  if (!messages.some((m) => m.role !== 'system')) {
    messages = [...messages, { role: 'user', content: 'Begin.' }];
  }

  let lastError: unknown;
  for (const p of providers) {
    try {
      const completion = await p.client.chat.completions.create({
        model: p.model,
        messages,
        max_tokens: opts.maxTokens,
        temperature: opts.temperature,
        ...(p.jsonMode ? { response_format: { type: 'json_object' as const } } : {}),
      });
      const raw = completion.choices[0]?.message?.content || '';
      const parsed = parseJsonLoose(raw);
      if (parsed) return parsed;
      // The model answered but not as JSON — treat the text as the reply.
      if (raw.trim()) return { reply: raw.trim() };
      lastError = new Error(`${p.name} returned an empty reply`);
    } catch (e) {
      lastError = e;
      console.error(`LLM provider "${p.name}" failed:`, (e as Error).message);
    }
  }
  throw lastError instanceof Error ? lastError : new Error('The AI is unavailable right now');
}
