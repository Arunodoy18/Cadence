'use client';

import { useEffect } from 'react';
import { useAuth } from '@/components/Providers';
import { refreshPushIfGranted } from '@/lib/push.client';

// Never prompts. Only re-syncs the device token for users who already opted in.
export function PushNotificationSetup() {
  const { status } = useAuth();
  useEffect(() => {
    if (status === 'authenticated') refreshPushIfGranted().catch(() => {});
  }, [status]);
  return null;
}
