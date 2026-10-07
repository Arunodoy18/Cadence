// Push reminders are opt-in (DPDP: consent must be specific and freely given),
// so nothing here runs at launch. `enablePush` is called from the reminder
// toggle in Settings, after explaining what the notifications are for.
import { apiFetch } from '@/lib/api';

async function native() {
  const { Capacitor } = await import('@capacitor/core');
  if (!Capacitor.isNativePlatform()) return null;
  const { PushNotifications } = await import('@capacitor/push-notifications');
  return { Capacitor, PushNotifications };
}

let listenersAttached = false;

async function attachListeners(n: NonNullable<Awaited<ReturnType<typeof native>>>) {
  if (listenersAttached) return;
  listenersAttached = true;
  const platform = n.Capacitor.getPlatform();
  n.PushNotifications.addListener('registration', async (token) => {
    try {
      await apiFetch('/api/push/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token.value, platform }),
      });
    } catch (e) {
      console.error('Failed to register push token', e);
    }
  });
}

export async function pushEnabled(): Promise<boolean> {
  const n = await native();
  if (!n) return false;
  return (await n.PushNotifications.checkPermissions()).receive === 'granted';
}

export async function enablePush(): Promise<boolean> {
  const n = await native();
  if (!n) return false;
  await attachListeners(n);
  let perm = await n.PushNotifications.checkPermissions();
  if (perm.receive !== 'granted') perm = await n.PushNotifications.requestPermissions();
  if (perm.receive !== 'granted') return false;
  await n.PushNotifications.register();
  return true;
}

export async function disablePush(): Promise<void> {
  const n = await native();
  if (!n) return;
  await n.PushNotifications.unregister();
}

// On launch, if the user already granted permission earlier, quietly refresh
// the token with the server — never prompts.
export async function refreshPushIfGranted() {
  const n = await native();
  if (!n) return;
  if ((await n.PushNotifications.checkPermissions()).receive === 'granted') {
    await attachListeners(n);
    await n.PushNotifications.register();
  }
}
