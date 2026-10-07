import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The native app's UI is bundled in the APK and served from the WebView's own
// origin (https://localhost on Android, capacitor://localhost on iOS), so every
// call it makes to this API is cross-origin. Allow exactly those origins —
// never a wildcard, since these endpoints are auth-gated and metered.
const ALLOWED_ORIGINS = new Set([
  'https://localhost',
  'http://localhost',
  'capacitor://localhost',
  'ionic://localhost',
]);

export function proxy(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowed = !!origin && ALLOWED_ORIGINS.has(origin);

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: allowed ? 204 : 403,
      headers: allowed ? corsHeaders(origin!) : {},
    });
  }

  const res = NextResponse.next();
  if (allowed) for (const [k, v] of Object.entries(corsHeaders(origin!))) res.headers.set(k, v);
  return res;
}

function corsHeaders(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

export const config = {
  matcher: '/api/:path*',
};
