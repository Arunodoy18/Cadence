// Daily practice reminder, scheduled on the device itself with local
// notifications — no server, no push token, no data leaves the phone.
export type Reminder = { on: boolean; hour: number };

const KEY = 'cadence_reminder';
const NOTIFICATION_ID = 1001;

export function loadReminder(): Reminder {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { on: false, hour: 18 };
}

function saveReminder(r: Reminder) {
  try {
    localStorage.setItem(KEY, JSON.stringify(r));
  } catch {}
}

// Plugins are Proxies — never return one directly from an async function
// (JS would call its .then()); wrap it in an object.
async function plugin() {
  const { Capacitor } = await import('@capacitor/core');
  if (!Capacitor.isNativePlatform()) return null;
  const { LocalNotifications } = await import('@capacitor/local-notifications');
  return { LN: LocalNotifications };
}

// Returns the reminder that is actually in effect (off if permission was refused).
export async function applyReminder(next: Reminder, langName: string): Promise<Reminder> {
  const p = await plugin();
  if (!p) return next;
  const { LN } = p;
  await LN.cancel({ notifications: [{ id: NOTIFICATION_ID }] });
  if (!next.on) {
    saveReminder(next);
    return next;
  }
  let perm = await LN.checkPermissions();
  if (perm.display !== 'granted') perm = await LN.requestPermissions();
  if (perm.display !== 'granted') {
    const off = { ...next, on: false };
    saveReminder(off);
    return off;
  }
  await LN.schedule({
    notifications: [
      {
        id: NOTIFICATION_ID,
        title: 'Time for your Cadence',
        body: `A few minutes of ${langName} today keeps it flowing.`,
        schedule: { on: { hour: next.hour, minute: 0 }, allowWhileIdle: true },
      },
    ],
  });
  saveReminder(next);
  return next;
}
