'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Only does anything inside the native Android/iOS app shell — on the web/PWA
// there's no APNs/FCM registration to do. Requests permission once signed in,
// then hands the resulting device token to the backend so it can be targeted
// later (see src/lib/push.ts for the sending side).
export function PushNotificationSetup() {
  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') return;

    let cancelled = false;

    (async () => {
      // Capacitor is only present inside the native app shell — importing it
      // dynamically keeps this a no-op on the regular web/PWA build.
      let Capacitor: typeof import('@capacitor/core').Capacitor;
      let PushNotifications: typeof import('@capacitor/push-notifications').PushNotifications;
      try {
        ({ Capacitor } = await import('@capacitor/core'));
        ({ PushNotifications } = await import('@capacitor/push-notifications'));
      } catch {
        return;
      }
      if (cancelled || !Capacitor.isNativePlatform()) return;

      const platform = Capacitor.getPlatform(); // 'ios' | 'android'

      const registerToken = async (token: string) => {
        try {
          await fetch('/api/push/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, platform }),
          });
        } catch (e) {
          console.error('Failed to register push token', e);
        }
      };

      PushNotifications.addListener('registration', (token) => {
        registerToken(token.value);
      });
      PushNotifications.addListener('registrationError', (err) => {
        console.error('Push registration error', err);
      });

      const perms = await PushNotifications.checkPermissions();
      let granted = perms.receive === 'granted';
      if (perms.receive === 'prompt' || perms.receive === 'prompt-with-rationale') {
        const requested = await PushNotifications.requestPermissions();
        granted = requested.receive === 'granted';
      }
      if (granted) {
        await PushNotifications.register();
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [status]);

  return null;
}
