import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Coverage - Srikanth Samy & REEFlect',
  description: 'Media coverage of Srikanth Samy and REEFlect\'s marine conservation work, featuring NBC Bay Area, Digital Journal, and other press outlets.',
};

export default function PressPage() {
  return (
    <>
      {/* JSON-LD for Press Coverage */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Press Coverage - Srikanth Samy & REEFlect",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "Bay Area teen makes impact on helping marine life",
                  "datePublished": "2025-01-15",
                  "author": {"@type": "Organization", "name": "NBC Bay Area"},
                  "url": "https://www.nbcbayarea.com/news/local/climate-in-crisis/bay-area-teen-makes-impact-on-helping-marine-life/3929733/",
                  "mainEntityOfPage": "https://www.nbcbayarea.com/news/local/climate-in-crisis/bay-area-teen-makes-impact-on-helping-marine-life/3929733/",
                  "image": "https://reeflect.org/assets/press/nbc-cover.jpg",
                  "about": {"@id": "https://reeflect.org/#srikanth"},
                  "description": "Features Srikanth Samy of Dublin and his nonprofit REEFlect that uses technology for marine conservation."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "REEFlect: High Schoolers Making Waves in Ocean Conservation",
                  "datePublished": "2024-12-20",
                  "author": {"@type": "Organization", "name": "Digital Journal"},
                  "url": "https://www.digitaljournal.com/pr/news/vehement-media/reeflect-high-schoolers-making-waves-1361001422.html",
                  "mainEntityOfPage": "https://www.digitaljournal.com/pr/news/vehement-media/reeflect-high-schoolers-making-waves-1361001422.html",
                  "image": "https://reeflect.org/assets/press/digital-journal-cover.jpg",
                  "about": {"@id": "https://reeflect.org/#org"},
                  "description": "Coverage of REEFlect's innovative approach to marine conservation using AI and drone technology."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "Dublin Student Nonprofit Helps Clean Beaches Around Bay, Ghana",
                  "datePublished": "2024-11-10",
                  "author": {"@type": "Organization", "name": "Dublin, CA Patch"},
                  "url": "https://patch.com/california/dublin/dublin-student-nonprofit-helps-clean-beaches-around-bay-ghana",
                  "mainEntityOfPage": "https://patch.com/california/dublin/dublin-student-nonprofit-helps-clean-beaches-around-bay-ghana",
                  "image": "https://reeflect.org/assets/press/patch-cover.jpg",
                  "about": {"@id": "https://reeflect.org/#srikanth"},
                  "description": "Local Dublin coverage of Srikanth Samy's international beach cleanup efforts in Ghana."
                }
              }
            ]
          })
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Press Coverage
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Media coverage of Srikanth Samy and REEFlect&apos;s innovative work in marine conservation and ocean technology.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* NBC Bay Area Coverage */}
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <Image
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                src="/assets/press/nbc-cover.jpg"
                alt="NBC Bay Area coverage"
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2025-01-15" className="text-gray-500">
                  Jan 15, 2025
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  NBC Bay Area
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                  <a href="https://www.nbcbayarea.com/news/local/climate-in-crisis/bay-area-teen-makes-impact-on-helping-marine-life/3929733/" target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0" />
                    Bay Area teen makes impact on helping marine life
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Features Srikanth Samy of Dublin and his nonprofit REEFlect that uses technology for marine conservation, highlighting their smart buoy technology and global impact.
                </p>
              </div>
            </div>
          </article>

          {/* Digital Journal Coverage */}
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <Image
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                src="/assets/press/digital-journal-cover.jpg"
                alt="Digital Journal coverage"
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2024-12-20" className="text-gray-500">
                  Dec 20, 2024
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Digital Journal
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                  <a href="https://www.digitaljournal.com/pr/news/vehement-media/reeflect-high-schoolers-making-waves-1361001422.html" target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0" />
                    REEFlect: High Schoolers Making Waves in Ocean Conservation
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Coverage of REEFlect&apos;s innovative approach to marine conservation using AI and drone technology, spanning 113 members across 7 countries.
                </p>
              </div>
            </div>
          </article>

          {/* Patch Coverage */}
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <Image
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                src="/assets/press/patch-cover.jpg"
                alt="Dublin Patch coverage"
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2024-11-10" className="text-gray-500">
                  Nov 10, 2024
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Dublin, CA Patch
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                  <a href="https://patch.com/california/dublin/dublin-student-nonprofit-helps-clean-beaches-around-bay-ghana" target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0" />
                    Dublin Student Nonprofit Helps Clean Beaches Around Bay, Ghana
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Local Dublin coverage of Srikanth Samy&apos;s international beach cleanup efforts in Ghana and partnerships with East Bay Regional Park District.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            For Media Inquiries
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Contact Srikanth Samy for interviews, speaking opportunities, or media coverage.
          </p>
          <div className="mt-6">
            <a
              href="mailto:srikanthsamy@reeflect.org"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact for Media
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
