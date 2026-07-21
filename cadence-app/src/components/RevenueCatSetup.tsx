'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Only does anything inside the native Android/iOS app shell — on the web/PWA
// there's no Play Billing/StoreKit to configure. Configures the Purchases SDK
// with our own user id as the RevenueCat appUserID, so entitlement webhooks
// and the server-side verify call (see /api/revenuecat/verify) can match a
// purchase straight back to `users.id` with no extra mapping table.
export function RevenueCatSetup() {
  const { data: session, status } = useSession();
  const userId = (session?.user as any)?.id;

  useEffect(() => {
    if (status !== 'authenticated' || !userId) return;

    let cancelled = false;

    (async () => {
      let Capacitor: typeof import('@capacitor/core').Capacitor;
      let Purchases: typeof import('@revenuecat/purchases-capacitor').Purchases;
      try {
        ({ Capacitor } = await import('@capacitor/core'));
        ({ Purchases } = await import('@revenuecat/purchases-capacitor'));
      } catch {
        return;
      }
      if (cancelled || !Capacitor.isNativePlatform()) return;

      const platform = Capacitor.getPlatform(); // 'ios' | 'android'
      const apiKey = platform === 'ios'
        ? process.env.NEXT_PUBLIC_REVENUECAT_IOS_KEY
        : process.env.NEXT_PUBLIC_REVENUECAT_ANDROID_KEY;

      if (!apiKey) {
        console.warn(`RevenueCat: no public SDK key configured for platform "${platform}" — Plus purchases are disabled.`);
        return;
      }

      await Purchases.configure({ apiKey, appUserID: userId });
    })();

    return () => {
      cancelled = true;
    };
  }, [status, userId]);

  return null;
}
