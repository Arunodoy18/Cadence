"use client";
import { useEffect } from "react";

export function PwaUpdater() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // The current build doesn't ship a service worker at all (no /sw.js,
      // nothing calls .register() here). But an earlier deploy did, so a
      // visitor who installed the app a while back can still have that old
      // worker controlling this origin — it keeps serving its own cached
      // shell, which references JS chunk filenames from that old deploy.
      // Every new deploy changes those filenames, so the old chunks 404 and
      // the app never hydrates: a permanent blank white screen for that
      // device until the stale worker is cleared. Self-heal it here instead
      // of asking users to manually clear site data.
      navigator.serviceWorker.getRegistrations().then((regs) => {
        if (regs.length === 0) return;
        Promise.all(regs.map((r) => r.unregister())).then(() => {
          if ("caches" in window) {
            caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))));
          }
          window.location.reload();
        });
      });

      // Whenever the service worker updates and takes control, automatically refresh the page
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  }, []);

  return null;
}
