'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { useSession } from 'next-auth/react';

function PaidRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { update } = useSession();

  useEffect(() => {
    const qs = searchParams.toString();
    // Re-sync the session from the DB so the client sees the new plan right
    // away instead of waiting for the next full login (the jwt callback reads
    // the real plan from the database on this trigger, not from this call).
    update().then(() => {
      router.replace(qs ? `/?view=paid&${qs}` : '/?view=paid');
    });
  }, [searchParams, router, update]);

  return <div style={{ background: '#FBF6EE', minHeight: '100vh' }} />;
}

export default function PaidPage() {
  return (
    <Suspense fallback={<div style={{ background: '#FBF6EE', minHeight: '100vh' }} />}>
      <PaidRedirect />
    </Suspense>
  );
}
