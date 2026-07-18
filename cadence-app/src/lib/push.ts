import { getApps, initializeApp, cert, type App } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import { sql } from './db';

// Firebase Cloud Messaging is the one send API used for both platforms —
// FCM delivers to Android directly and relays to APNs for iOS under the
// hood, so there's no separate native APNs server code to write here.
//
// Requires FIREBASE_SERVICE_ACCOUNT (the full JSON key for a Firebase
// service account, as a single-line string) to be set. Until a real
// Firebase project exists and that env var is configured, this logs what
// it would have sent and returns — the same graceful-fallback pattern
// already used for Stripe/Razorpay when those keys aren't configured.
let firebaseApp: App | null | undefined;

function getFirebaseApp(): App | null {
  if (firebaseApp !== undefined) return firebaseApp;

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccountJson) {
    firebaseApp = null;
    return firebaseApp;
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountJson);
    firebaseApp = getApps()[0] || initializeApp({ credential: cert(serviceAccount) });
  } catch (e) {
    console.error('FIREBASE_SERVICE_ACCOUNT is set but invalid — push notifications disabled', e);
    firebaseApp = null;
  }
  return firebaseApp;
}

export async function sendPushNotification(
  userId: string,
  title: string,
  body: string,
  data?: Record<string, string>
): Promise<void> {
  const app = getFirebaseApp();
  const tokens = await sql`SELECT token FROM push_tokens WHERE user_id = ${userId}`;
  if (tokens.length === 0) return;

  if (!app) {
    console.log(`[push] Firebase not configured — would have sent "${title}" to ${tokens.length} device(s) for user ${userId}`);
    return;
  }

  const response = await getMessaging(app).sendEachForMulticast({
    tokens: tokens.map((t: any) => t.token),
    notification: { title, body },
    data,
  });

  // Prune tokens FCM says are no longer valid (app uninstalled, token expired).
  const deadTokens = response.responses
    .map((r, i) => (!r.success && isUnregisteredTokenError(r.error?.code) ? tokens[i].token : null))
    .filter((t): t is string => t !== null);

  if (deadTokens.length > 0) {
    await sql`DELETE FROM push_tokens WHERE token = ANY(${deadTokens})`;
  }
}

function isUnregisteredTokenError(code?: string): boolean {
  return code === 'messaging/registration-token-not-registered' || code === 'messaging/invalid-registration-token';
}
