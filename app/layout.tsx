import Head from 'next/head';
import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import SEO from '~/components/SEO'; // Import the SEO component

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`} suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/favicon" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE.description} />
        <meta name="keywords" content="Ocean, Technology, Awareness, Non-profit, Conservation, Buoy, Beach, Community, Contact" />
        <meta name="author" content={SITE.author} />
        <link rel="canonical" href={SITE.url} />
        <meta property="og:title" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE.url}/important.png`} />
        <SEO title={SITE.title} description={SITE.description} url={SITE.url} /> {/* Add the SEO component here */}
      </Head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900" suppressHydrationWarning>
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}