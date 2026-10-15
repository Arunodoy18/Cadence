'use client';

import { useEffect, useState } from 'react';
import { APK_URL } from '@/lib/legal';

type Meta = { date: string; sizeMb: string } | null;

// The download button, plus a live "latest build" line read from GitHub so
// visitors can see the APK is current. Falls back silently if GitHub is slow.
export function DownloadButton({ large = false, id }: { large?: boolean; id?: string }) {
  const [meta, setMeta] = useState<Meta>(null);
  const [platform, setPlatform] = useState<'android' | 'ios' | 'other'>('other');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setPlatform(/android/.test(ua) ? 'android' : /iphone|ipad|ipod/.test(ua) ? 'ios' : 'other');
    fetch('https://api.github.com/repos/Arunodoy18/Cadence/releases/tags/latest-apk')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((rel) => {
        const apk = (rel.assets || []).find((a: any) => a.name === 'Cadence-latest.apk');
        if (!apk) return;
        setMeta({
          date: new Date(apk.updated_at || rel.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
          sizeMb: (apk.size / 1048576).toFixed(1),
        });
      })
      .catch(() => {});
  }, []);

  return (
    <div className="ld-dl" id={id}>
      <a className={`ld-btn ld-btn-primary${large ? ' ld-btn-lg' : ''}`} href={APK_URL} rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 9.5l1.7-3a.4.4 0 00-.7-.4l-1.7 3A10.4 10.4 0 0012 8.1c-1.8 0-3.5.5-5 1.3l-1.7-3a.4.4 0 00-.7.4l1.7 3A9.2 9.2 0 002.5 16h19a9.2 9.2 0 00-3.9-6.5zM8.5 13.5a.9.9 0 110-1.8.9.9 0 010 1.8zm7 0a.9.9 0 110-1.8.9.9 0 010 1.8z"/></svg>
        Download for Android
      </a>
      <div className="ld-dl-note">
        {platform === 'ios'
          ? 'You are on iPhone — the iOS version is coming. Open this page on an Android phone to install.'
          : meta
            ? `Free · Android 7+ · ${meta.sizeMb} MB · updated ${meta.date}`
            : 'Free · Android 7+ · always the latest build'}
      </div>
    </div>
  );
}
