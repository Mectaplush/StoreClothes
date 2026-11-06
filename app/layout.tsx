import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Try the Look — Runway',
  description:
    'Six looks, styled head to toe. Explore the runway, isolate a look, and tap a pin to see the piece.',
  openGraph: {
    title: 'Try the Look — Runway',
    description:
      'Six looks, styled head to toe. Explore the runway, isolate a look, and tap a pin to see the piece.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Try the Look — Runway',
    description:
      'Six looks, styled head to toe. Explore the runway, isolate a look, and tap a pin to see the piece.',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://reel-ref-try-the-look.vercel.app/assets/model-1-640.webp"
          // @ts-expect-error React 19 / Next.js fetchPriority
          fetchpriority="high"
          fetchPriority="high"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
