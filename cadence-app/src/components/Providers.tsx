'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { apiFetch, loadToken, saveToken, UNAUTHORIZED_EVENT } from '@/lib/api';

export type AuthUser = { id: string; email: string; name: string };
type Status = 'loading' | 'authenticated' | 'unauthenticated';

type Credentials = { email: string; password: string; name?: string; consent?: boolean; ageConfirmed?: boolean };

type AuthContextValue = {
  user: AuthUser | null;
  status: Status;
  login: (c: Credentials) => Promise<string | null>;
  signup: (c: Credentials) => Promise<string | null>;
  logout: () => Promise<void>;
  setUserName: (name: string) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const USER_CACHE_KEY = 'cadence_user';

function readCachedUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(USER_CACHE_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  const applyUser = useCallback((u: AuthUser | null) => {
    setUser(u);
    setStatus(u ? 'authenticated' : 'unauthenticated');
    try {
      if (u) localStorage.setItem(USER_CACHE_KEY, JSON.stringify(u));
      else localStorage.removeItem(USER_CACHE_KEY);
    } catch {}
  }, []);

  // Restore the signed-in user on launch. If the server can't be reached
  // (offline), trust the cached user so the app still opens; only a definite
  // 401 from the server signs the user out.
  useEffect(() => {
    (async () => {
      const token = await loadToken();
      if (!token) return applyUser(null);
      try {
        const res = await apiFetch('/api/mobile/auth');
        if (res.ok) {
          const data = await res.json();
          applyUser(data.user);
        } else if (res.status === 401) {
          await saveToken(null);
          applyUser(null);
        } else {
          applyUser(readCachedUser());
        }
      } catch {
        applyUser(readCachedUser());
      }
    })();
  }, [applyUser]);

  useEffect(() => {
    const onUnauthorized = async () => {
      await saveToken(null);
      applyUser(null);
    };
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
  }, [applyUser]);

  const authenticate = useCallback(
    async (action: 'login' | 'signup', c: Credentials): Promise<string | null> => {
      try {
        const res = await apiFetch('/api/mobile/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...c, action }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) return data.error || 'Something went wrong. Please try again.';
        await saveToken(data.token);
        applyUser(data.user);
        return null;
      } catch {
        return 'Can’t reach Cadence — check your internet connection and try again.';
      }
    },
    [applyUser]
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      status,
      login: (c) => authenticate('login', c),
      signup: (c) => authenticate('signup', c),
      logout: async () => {
        await saveToken(null);
        applyUser(null);
      },
      setUserName: (name) => user && applyUser({ ...user, name }),
    }),
    [user, status, authenticate, applyUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <Providers>');
  return ctx;
}
