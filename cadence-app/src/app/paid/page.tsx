'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function PaidRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const qs = searchParams.toString();
    router.replace(qs ? `/?view=paid&${qs}` : '/?view=paid');
  }, []);

  return <div style={{ background: '#FBF6EE', minHeight: '100vh' }} />;
}

export default function PaidPage() {
  return (
    <Suspense fallback={<div style={{ background: '#FBF6EE', minHeight: '100vh' }} />}>
      <PaidRedirect />
    </Suspense>
  );
}
