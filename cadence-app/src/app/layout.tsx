import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Cadence — language learning app',
  description: 'Duolingo builds a habit. Cadence builds a speaker.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:ital,wght@0,300..800;1,400..600&family=Noto+Sans:wght@400..700&family=Noto+Sans+JP:wght@400..700&family=Noto+Sans+KR:wght@400..700&family=Noto+Sans+Devanagari:wght@400..700&family=Noto+Sans+Arabic:wght@400..700&family=Noto+Sans+SC:wght@400..700&family=Noto+Sans+Thai:wght@400..700&family=Noto+Sans+Hebrew:wght@400..700&family=Noto+Sans+Bengali:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
