import Head from 'next/head';
import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import SEO from '~/components/SEO';

import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import '~/assets/styles/base.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({ 
  subsets: ['latin'], 
  variable: '--font-sora',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap',
});

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  keywords: [
    'Ocean Conservation',
    'Climate Technology', 
    'Smart Buoys',
    'Marine Technology',
    'Beach Cleanup',
    'Ocean Data',
    'Coral Reef Protection',
    'Environmental Nonprofit',
    'Youth Conservation',
    'Open Source Ocean Tech'
  ],
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/important.png`,
        width: 1200,
        height: 630,
        alt: SITE.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}/important.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html 
      lang="en" 
      className={`motion-safe:scroll-smooth 2xl:text-[20px] ${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans`} 
      suppressHydrationWarning
    >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <link rel="canonical" href={SITE.url} />
        <SEO title={SITE.title} description={SITE.description} url={SITE.url} />
      </Head>
      <body 
        className="tracking-tight antialiased text-slate-800 dark:text-slate-200 bg-gradient-to-br from-ocean-50 via-white to-secondary-50 dark:from-slate-950 dark:via-slate-900 dark:to-ocean-950 min-h-screen" 
        suppressHydrationWarning
      >
        <div className="relative">
          {/* Background Effects */}
          <div className="fixed inset-0 bg-mesh opacity-30 dark:opacity-20 pointer-events-none" />
          <div className="fixed inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />
          
          <Providers>
            <Announcement />
            <Header />
            <main className="relative z-10">{children}</main>
            <Footer2 />
          </Providers>
        </div>
      </body>
    </html>
  );
}