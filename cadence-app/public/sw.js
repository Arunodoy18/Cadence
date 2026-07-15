// Kill switch: this build doesn't ship a real precaching service worker
// (see next.config.ts — @serwist/next's webpack plugin doesn't run under
// Turbopack, so nothing currently regenerates this file at build time).
// A visitor who installed the app under an earlier deploy may still have
// that old worker controlling this origin, serving its own frozen cached
// shell — which references JS chunk filenames that no longer exist after
// later deploys, so the app never loads (permanent blank screen).
//
// Browsers check a registered service worker's script for byte-for-byte
// changes independently of whatever that worker's own fetch handler does,
// so shipping this file at the same registered scope reaches even a
// visitor who is fully stuck with no working page JS. Once the browser
// swaps in this worker, it wipes every cache it can see and unregisters
// itself, then forces a real reload straight from the network.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
