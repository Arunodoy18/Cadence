import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

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
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        const { email, password, name, action } = credentials;

        if (action === 'signup') {
          // Check if user already exists
          const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
          if (existing.length > 0) {
            throw new Error('An account with this email already exists');
          }

          // Create new user
          const passwordHash = await bcrypt.hash(password, 12);
          const id = uuidv4();
          await sql`
            INSERT INTO users (id, email, name, password_hash, auth_provider, plan)
            VALUES (${id}, ${email}, ${name || email.split('@')[0]}, ${passwordHash}, 'email', 'free')
          `;

          return { id, email, name: name || email.split('@')[0], plan: 'free' };
        } else {
          // Login
          const users = await sql`SELECT id, email, name, password_hash, plan FROM users WHERE email = ${email}`;
          if (users.length === 0) {
            throw new Error('No account found with this email');
          }

          const user = users[0];
          if (!user.password_hash) {
            throw new Error('This account uses social login');
          }

          const isValid = await bcrypt.compare(password, user.password_hash);
          if (!isValid) {
            throw new Error('Invalid password');
          }

          return { id: user.id, email: user.email, name: user.name, plan: user.plan };
        }
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

    async jwt({ token, user }) {
      if (user) {
        token.userId = (user as any).id;
        token.plan = (user as any).plan || 'free';
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
