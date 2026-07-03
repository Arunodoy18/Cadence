"use client";
import { useEffect, useState } from "react";

export function PwaUpdater() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!reg) return;

        // If there's already a waiting worker, an update is ready
        if (reg.waiting) {
          setUpdateAvailable(true);
          setWaitingWorker(reg.waiting);
        }

        // Listen for new workers being installed
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              // Has the new worker finished installing?
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                setUpdateAvailable(true);
                setWaitingWorker(newWorker);
              }
            });
          }
        });
      });

      // Reload the page once the new service worker takes control
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  }, []);

  const updateApp = () => {
    if (waitingWorker) {
      // Send a message to the waiting worker to skip waiting and activate immediately
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
    }
  };

  if (!updateAvailable) return null;

  return (
    <div 
      onClick={updateApp}
      style={{
        position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
        background: '#DB5338', color: '#FBF6EE', padding: '12px 24px', 
        borderRadius: '99px', fontSize: '14px', fontWeight: 600, 
        zIndex: 9999, boxShadow: '0 4px 14px rgba(0,0,0,0.3)', 
        cursor: 'pointer', whiteSpace: 'nowrap', animation: 'floatUp 0.3s ease-out'
      }}
    >
      ✨ Update available! Tap to refresh.
    </div>
  );
}
