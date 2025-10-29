import Head from 'next/head';
import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import SEO from '~/components/SEO'; // Import the SEO component

import '~/assets/styles/base.css';

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
    <html lang="en" className="motion-safe:scroll-smooth 2xl:text-[24px] font-sans" suppressHydrationWarning>
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
        
        {/* Enhanced Open Graph for Person */}
        <meta property="profile:first_name" content="Srikanth" />
        <meta property="profile:last_name" content="Samy" />
        <meta property="profile:username" content="FlyingPotato437" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Srikanth Samy - Co-founder of REEFlect" />
        <meta name="twitter:description" content="Dublin High School student co-founding REEFlect, using AI and smart buoy technology for marine conservation across 7 countries with 113+ members." />
        <meta name="twitter:image" content={`${SITE.url}/assets/srikanth.jpg`} />
        <meta name="twitter:creator" content="@srikanthsamy" />
        <meta name="twitter:site" content="@reeflect_org" />
        
        {/* JSON-LD Structured Data for Srikanth Samy */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://reeflect.org/#srikanth",
              "name": "Srikanth Samy",
              "givenName": "Srikanth",
              "familyName": "Samy",
              "image": "https://reeflect.org/assets/srikanth.jpg",
              "url": "https://reeflect.org/",
              "jobTitle": ["Co-Founder", "Environmental Researcher", "High School Student"],
              "affiliation": [
                {
                  "@type": "Organization",
                  "name": "REEFlect",
                  "url": "https://reeflect.org/"
                },
                {
                  "@type": "Organization",
                  "name": "Dublin High School",
                  "address": "Dublin, California"
                },
                {
                  "@type": "Organization",
                  "name": "Johns Hopkins University",
                  "description": "Student researcher under Environmental Engineering professor"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "REEFlect",
                "url": "https://reeflect.org/"
              },
              "knowsAbout": [
                "Marine Conservation", "Ocean Technology", "Environmental Science",
                "Smart Buoy Technology", "Ocean Data Analysis", "AI in Environmental Monitoring",
                "Drone Technology", "Marine Debris Tracking", "Coral Health Analysis"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/srikanth-samy-824b661b4/",
                "https://github.com/FlyingPotato437"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "General",
                "email": "srikanthsamy@reeflect.org",
                "url": "https://reeflect.org/contact"
              },
              "description": "Co-founder of REEFlect, a marine conservation organization using technology for ocean health monitoring. Dublin High School student and environmental researcher working on smart buoy technology and AI-powered marine conservation solutions."
            })
          }}
        />
        
        {/* JSON-LD Structured Data for REEFlect Organization */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://reeflect.org/#org",
              "name": "REEFlect",
              "alternateName": "REEFlect - A High School led Environmental Initiative",
              "url": "https://reeflect.org/",
              "logo": "https://reeflect.org/assets/logo.png",
              "description": "A high school led environmental initiative that aims to raise awareness about the importance of protecting our oceans and marine life through technology and community action.",
              "founder": [
                {
                  "@type": "Person",
                  "name": "Srikanth Samy",
                  "url": "https://reeflect.org/"
                },
                {
                  "@type": "Person",
                  "name": "Krishiv Jaini"
                }
              ],
              "foundingDate": "2023",
              "foundingLocation": {
                "@type": "Place",
                "name": "Dublin, California",
                "addressCountry": "US"
              },
              "numberOfEmployees": "113",
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Bay Area, California"
                },
                {
                  "@type": "Place", 
                  "name": "Ghana, West Africa"
                }
              ],
              "knowsAbout": [
                "Marine Conservation", "Ocean Technology", "Beach Cleanup", 
                "Smart Buoy Technology", "AI Environmental Monitoring", "Ocean Health Data"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/reeflectnpo/",
                "https://github.com/reeflect"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "General",
                "email": "hello@reeflect.org",
                "url": "https://reeflect.org/contact"
              }]
            })
          }}
        />
        
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
