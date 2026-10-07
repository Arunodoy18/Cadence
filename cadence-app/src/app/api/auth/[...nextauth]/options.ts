import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { sql } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { authorizeCredentials, type CredentialsInput } from '@/lib/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/',
  },
  providers: [
    // Google OAuth — activates when GOOGLE_CLIENT_ID is set
    ...(process.env.GOOGLE_CLIENT_ID
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
        ]
      : []),

    // Email + Password
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        name: { label: 'Name', type: 'text' },
        action: { label: 'Action', type: 'text' }, // 'signup' or 'login'
        consent: { label: 'Consent', type: 'text' },
        ageConfirmed: { label: 'Age confirmed', type: 'text' },
      },
      async authorize(credentials) {
        return authorizeCredentials((credentials ?? {}) as CredentialsInput);
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        // Upsert user for Google OAuth
        const existing = await sql`SELECT id, plan FROM users WHERE email = ${user.email}`;
        if (existing.length === 0) {
          const id = uuidv4();
          await sql`
            INSERT INTO users (id, email, name, auth_provider, plan)
            VALUES (${id}, ${user.email}, ${user.name}, 'google', 'free')
          `;
          (user as any).id = id;
          (user as any).plan = 'free';
        } else {
          (user as any).id = existing[0].id;
          (user as any).plan = existing[0].plan;
        }
      }
      return true;
    },

    async jwt({ token, user, trigger }) {
      if (user) {
        token.userId = (user as any).id;
        token.plan = (user as any).plan || 'free';
      }
      // Manual session refresh (e.g. right after checkout, so the client sees
      // Plus without needing to log out/in). Never trust a client-supplied
      // plan value here — always re-read the real plan from the database, or
      // any signed-in user could grant themselves Plus by calling
      // session.update() with an arbitrary payload from the browser.
      if (trigger === 'update' && token.userId) {
        const rows = await sql`SELECT plan FROM users WHERE id = ${token.userId}`;
        if (rows.length > 0) token.plan = rows[0].plan;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.userId;
        (session.user as any).plan = token.plan;
      }
      return session;
    },
  },
};
