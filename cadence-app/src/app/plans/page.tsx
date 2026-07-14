'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function PlansRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const qs = searchParams.toString();
    router.replace(qs ? `/?view=plans&${qs}` : '/?view=plans');
  }, []);

  return <div style={{ background: '#FBF6EE', minHeight: '100vh' }} />;
}

export default function PlansPage() {
  return (
    <Suspense fallback={<div style={{ background: '#FBF6EE', minHeight: '100vh' }} />}>
      <PlansRedirect />
    </Suspense>
  );
}
