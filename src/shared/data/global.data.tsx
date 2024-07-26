import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'Services',
          href: '/services',
        },
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
      ],
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [],
  isSticky: true,
  showToggleTheme: true, // Add this line to enable the light mode/dark mode toggle
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['8151 Village Parkway', 'Dublin, CA, 94568'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +925 503 8351', 'Office: +925 558 5616'],
    },
    {
      title: 'Email',
      texts: ['Office: srikanth.samy008@gmail.com', 'Site: https://reeflect.org'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
        >
          {' '}
          REEFlect
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
