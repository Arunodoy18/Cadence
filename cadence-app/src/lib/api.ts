// Every network call goes through here. In the native app the UI is bundled in
// the APK, so API calls are cross-origin: they target NEXT_PUBLIC_API_BASE and
// authenticate with a bearer token (there is no cookie session).

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE ?? '').replace(/\/$/, '');
const TOKEN_KEY = 'cadence_token';

let memoryToken: string | null = null;

// Capacitor plugins are Proxies: returning one straight from an async function
// makes JS call its .then(), which throws. Always hand it back inside an object.
async function prefs() {
  const { Preferences } = await import('@capacitor/preferences');
  return { Preferences };
}

export async function loadToken(): Promise<string | null> {
  try {
    const { Preferences } = await prefs();
    const { value } = await Preferences.get({ key: TOKEN_KEY });
    memoryToken = value;
  } catch {
    memoryToken = null;
  }
  return memoryToken;
}

export async function saveToken(token: string | null) {
  memoryToken = token;
  try {
    const { Preferences } = await prefs();
    if (token) await Preferences.set({ key: TOKEN_KEY, value: token });
    else await Preferences.remove({ key: TOKEN_KEY });
  } catch {
    // Preferences unavailable (plain browser preview) — memory token still works for this run.
  }
}

export function hasToken() {
  return !!memoryToken;
}

export const UNAUTHORIZED_EVENT = 'cadence:unauthorized';

// A hung request should fail fast with a clear message, not leave the user
// staring at a spinner. Generous enough for AI replies and speech uploads.
const REQUEST_TIMEOUT_MS = 30_000;

export async function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);
  if (memoryToken) headers.set('Authorization', `Bearer ${memoryToken}`);
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
    signal: init.signal ?? (typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(REQUEST_TIMEOUT_MS) : undefined),
  });
  if (res.status === 401 && memoryToken && typeof window !== 'undefined') {
    window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
  }
  return res;
}
