import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImgHome from '~/assets/images/Screenshot 2024-09-22 at 4.55.33 PM.png';
import srikanthCleanupImg from '~/assets/images/SrikanthCleanup.png';
import krishivServicesHeroImg from '~/assets/images/KrishivlikesBags.png';
import adiPicImg from '~/assets/images/adipic.png';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/girma-nigusse-dnXVrFuM3c8-unsplash.jpg';
import cameraBackImg from '~/assets/images/Screenshot 2024-09-22 at 4.57.57 PM.png';
import coastedAfricaImg from '~/assets/images/coasted-africa-curriculum.png';
import smartBuoyImg from '~/assets/images/smart-buoy-2025.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      REEFlect <span className="hidden md:inline"></span> <span></span>{' '}
      <span className="sm:whitespace-nowrap"></span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
        </span>{' '}
        A High Schooler led 501(c)(3) non profit to help take care of our oceans using modern technology <em></em><em></em>
      </span>{' '}
    </>
  ),
  callToAction: {
    text: 'Get Involved',
    href: 'https://vke4l91re98.typeform.com/to/HhXKC86e',
    targetBlank: true,
    icon: 'IconUsers',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: heroImgHome,
    alt: 'Hero REEFlect',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page (Key Projects) *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Our Key Initiatives',
    subtitle:
      "REEFlect is actively engaged in impactful projects to protect and understand our oceans. Here's a look at our main areas of focus and recent successes:",
    tagline: 'Projects in Action',
  },
  items: [
    {
      title: 'Smart Buoy Development',
      description:
        `Currently building our smart buoy for Ghana deployment, featuring LoRa communication and Raspberry Pi base stations. Designed to be open-source and low-cost for schools & NGOs. Data will be openly shared via <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a>.`,
      icon: 'IconDroplet',
    },
    {
      title: 'Global Outreach & Engagement',
      description:
        "Expanding our impact through strategic partnerships like COPG, with beach cleanups in both Ghana and the United States, successful climate movie showings, and our new Mozambique mangrove reforestation project with WFP and Planet Multiservices (PMS).",
      icon: 'IconWorld',
    },
    {
      title: 'Securing Our Future: Recent Funding',
      description:
        "We\'ve secured $12,000 in funding including $11k from the 1517 Fund and $1k from our COPG collaboration, fueling our conservation efforts and technological development.",
      icon: 'IconAward',
    },
  ],
};

// Patch Article CTA Section
export const patchArticleCTA: CallToActionProps = {
  id: 'patch-article-cta',
  hasBackground: false,
  title: 'REEFlect in the News!',
  subtitle: "Read about our journey and impact in the recent Dublin Patch article detailing our beach cleanups in the Bay Area and Ghana, our smart buoy technology, and community engagement efforts.",
  callToAction: {
    text: 'Read the Article',
    href: 'https://patch.com/california/dublin/dublin-student-nonprofit-helps-clean-beaches-around-bay-ghana',
    targetBlank: true,
    icon: 'IconArticle',
  },
};

// Research and Innovation Section *******************
export const featuresResearchAndInnovation: FeaturesProps = {
  id: 'research-innovation',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Pioneering Research & Innovation',
    subtitle:
      "REEFlect leverages technology and scientific research to deepen our understanding of marine ecosystems and develop new conservation tools.",
    tagline: 'R&D',
  },
  items: [
    {
      title: 'Smart Buoy Infrastructure',
      description:
        "Developing robust smart buoy systems with LoRa communication technology and Raspberry Pi base stations for reliable data collection and transmission. Our open-source ocean data aims to make marine information freely accessible.",
      icon: 'IconComponents',
    },
    {
      title: 'Machine Learning for Oceanography',
      description:
        "Exploring the use of ML in oceanographic data analysis, including projects like Gaussian Process for Sea Surface Temperature (SST) prediction, focusing on internal R&D.",
      icon: 'IconComponents',
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: false,
  header: {
    title: 'Our Technological Approach',
    subtitle: 'Harnessing data and technology for marine conservation.',
    tagline: 'Technology in Action',
  },
  content:
    'REEFlect integrates custom-built hardware like our smart buoys with advanced data analysis techniques, including machine learning, to provide actionable insights for ocean protection. Our open-source approach aims to democratize access to these tools.',
  items: [
    {
      title: 'Sensor Data Collection & Analysis',
      description:
        'Our smart buoys provide real-time data, which is processed and analyzed to monitor marine environments effectively. All buoy data is openly available via <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a>.',
    },
    {
      title: 'Open Source & Collaboration',
      description:
        'We believe in collaborative efforts. Our technology is developed with an open-source philosophy, encouraging participation from schools, NGOs, and citizen scientists.',
    },
    {
      title: 'Democratizing Ocean Data',
      description:
        'A core part of our mission is to make ocean data accessible and understandable, empowering more people to contribute to conservation.',
    },
  ],
  image: {
    src: smartBuoyImg,
    alt: 'REEFlect Smart Buoy Technology',
  },
  isReversed: false,
  isAfterContent: false,
};

// Beach Cleanup Focus
export const contentHomeTwo: ContentProps = {
  id: 'contentHomeTwo-beach-cleanup',
  hasBackground: true,
  header: {
    title: 'Community-Powered Conservation',
    subtitle: 'Mobilizing volunteers and partners for direct environmental action, from local shores to Ghana.',
    tagline: 'On-The-Ground Impact',
  },
  content:
    'Our beach cleanup initiatives, including our recent successful event and climate movie showings in Ghana, demonstrate our commitment to tangible environmental improvement and community engagement. We provide resources and support for local cleanup efforts worldwide.',
  items: [
    {
      title: 'International Cleanup Efforts',
      description:
        'Expanding our reach with events like the Ghana beach cleanup & movie showings, working hand-in-hand with local communities.',
    },
    {
      title: 'Volunteer Mobilization',
      description:
        'Empowering individuals to make a difference through organized and supported cleanup activities.',
    },
    {
      title: 'Building Local Partnerships',
      description:
        'Collaborating with local organizations like Clean Ocean Project Ghana to maximize the impact and sustainability of our conservation projects.',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Beach Cleanup Activity',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page (Our Approach)
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: coastedAfricaImg,
    alt: 'Coasted Africa Curriculum',
  },
  header: {
    title: 'Our Path to Impact: Educate, Innovate, Act, Secure',
    subtitle: "A multi-faceted strategy to drive ocean conservation, supported by community and foundation funding."
  },
  items: [
    {
      title: 'Educate & Inspire',
      description:
        "Through our Coasted Africa youth marine science curriculum, workshops, and climate movie showings in partnership with Plastic Oceans, we educate communities about marine ecosystems and conservation.",
      icon: 'IconMovie',
    },
    {
      title: 'Innovate with Technology',
      description:
        `We develop and deploy open-source technologies like smart buoys to monitor ocean health and make data accessible via <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a>.`,
      icon: 'IconRocket',
    },
    {
      title: 'Mobilize for Action',
      description:
        "Organizing global initiatives like beach cleanups and fostering a network of volunteers and partners to create tangible, on-the-ground change.",
      icon: 'IconUsers',
    },
    {
      title: 'Secure & Sustain Growth',
      description:
        'Actively seeking and securing funding through grants (e.g., $15k from Awesome Foundation) and community support ($11,517 raised) to sustain and expand our impact.',
      icon: 'IconCash',
    },
  ],
};

// Volunteer Call to Action Section
export const callToActionVolunteer: CallToActionProps = {
  id: 'cta-volunteer-home',
  hasBackground: true,
  title: 'Join Our Wave of Change',
  subtitle:
    'REEFlect is powered by passionate volunteers across marketing, engineering, design, and international chapters. We provide structured onboarding and training tracks to help you make a meaningful impact. Fill out our <a href="https://vke4l91re98.typeform.com/to/HhXKC86e" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Typeform</a> to get started!',
  callToAction: {
    text: 'Become a Volunteer',
    href: 'https://vke4l91re98.typeform.com/to/HhXKC86e',
    icon: 'IconUsers',
    targetBlank: true,
  },
  items: [
    { title: 'Marketing & Outreach' },
    { title: 'Engineering & Development' },
    { title: 'Creative & Design' },
    { title: 'International Chapters Lead' },
  ]
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'Voices from Our Community & Partners',
    subtitle: 'Hear what people are saying about REEFlect and our impact on ocean conservation.',
  },
  testimonials: [
    {
      name: 'Srikanth Samy',
      job: 'Founder, REEFlect',
      testimonial: `Leading REEFlect\'s charge in ocean conservation through technology has been an incredible journey. Witnessing the deployment of our smart buoys in Ghana and the enthusiasm of our global volunteers is truly inspiring.`,
      image: {
        src: srikanthCleanupImg,
        alt: 'Srikanth Samy',
      },
      href: '#',
    },
    {
      name: 'Krishiv Jaini',
      job: 'Co-Founder, REEFlect',
      testimonial: `Our open-source smart buoy technology and collaboration with platforms like <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a> are democratizing ocean data, empowering communities and researchers worldwide. It's exciting to see our tech making a real-world impact.`,
      image: {
        src: krishivServicesHeroImg,
        alt: 'Krishiv Jaini',
      },
      href: '#',
    },
    {
      name: 'Adi Kaushul',
      job: 'Chief Engineer, REEFlect',
      testimonial: `Driving the engineering efforts for REEFlect\'s smart buoys and data platforms has been a rewarding challenge. We\'re committed to building robust, accessible technology for ocean conservation.`,
      image: {
        src: adiPicImg,
        alt: 'Adi Kaushul',
      },
      href: '#',
    },
    {
      name: 'Local Partner, Ghana',
      job: 'Clean Ocean Project Ghana',
      testimonial: `Partnering with REEFlect for the beach cleanup and climate movie showings was a fantastic experience. Their support and dedication significantly boosted our local conservation efforts and community engagement.`,
      image: {
        src: 'https://images.unsplash.com/photo-1598394103259-8460f15d8878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        alt: 'Community Member',
      },
      href: '#',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: true,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Find answers to common questions about REEFlect, our projects, and how you can get involved.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is REEFlect\'s main mission?',
      description: `REEFlect is a 501(c)(3) non-profit dedicated to ocean conservation through modern technology, research, education, and community action. We focus on developing open-source tools and fostering global collaboration.`,
    },
    {
      title: 'How does the Smart Buoy project work?',
      description: `Our smart buoys collect real-time oceanographic data (like temperature) using low-cost, open-source hardware. This data is shared via platforms like <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a> to support research and education.`,
    },
    {
      title: "What kind of volunteer opportunities are available?",
      description: `We have diverse volunteer tracks including Marketing, Engineering, International Chapter leadership, and Creative/Design roles. Fill out our <a href="https://vke4l91re98.typeform.com/to/HhXKC86e" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Typeform</a> to join!`,
    },
    {
      title: "How is REEFlect involved in international conservation, like in Africa?",
      description: `We've expanded our on-the-ground efforts internationally, for example, by organizing beach cleanups, successful climate movie showings in Ghana, and deploying a smart buoy there. We aim to support and collaborate with global communities.`,
    },
    {
      title: 'What R&D projects is REEFlect working on?',
      description: `We're developing smart buoy infrastructure with LoRa communication and Raspberry Pi base stations, and exploring machine learning applications for oceanographic data, such as SST prediction, to further scientific understanding.`,
    },
    {
      title: 'How is REEFlect funded?',
      description: `REEFlect is supported by $12,000 in funding including $11k from the 1517 Fund and $1k from our COPG collaboration. These funds are vital for our projects and expansion.`,
    },
  ]
};

// Pricing data on Home page *******************
// This section seems less relevant for a non-profit. Consider removing or repurposing for "Donation Tiers" or "Support Us".
// For now, I will comment it out.
/*
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};
*/

// Team data on Home page *******************
/* // Commenting out teamHome as per request
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Our Leadership',
    subtitle:
      'Meet the core team driving REEFlect\'s mission forward.',
  },
  teams: [
    {
      name: 'Srikanth Samy',
      occupation: 'Founder & Executive Director',
      image: {
        src: srikanthCleanupImg,
        alt: 'Srikanth Samy',
      },
      items: [
        {
          title: 'LinkedIn',
          icon: 'IconBrandLinkedin',
          href: '#',
        },
        {
          title: 'Email',
          icon: 'IconMail',
          href: 'mailto:srikanthsamy@reeflect.org',
        },
      ],
    },
    {
      name: 'Krishiv Jaini',
      occupation: 'Co-Founder',
      image: {
        src: krishivServicesHeroImg,
        alt: 'Krishiv Jaini',
      },
      items: [
        {
          title: 'LinkedIn',
          icon: 'IconBrandLinkedin',
          href: '#',
        },
        {
          title: 'Email',
          icon: 'IconMail',
          href: '#',
        },
      ],
    },
    {
      name: 'Adi Kaushul',
      occupation: 'Chief Engineer',
      image: {
        src: adiPicImg,
        alt: 'Adi Kaushul',
      },
      items: [
        {
          title: 'LinkedIn',
          icon: 'IconBrandLinkedin',
          href: '#',
        },
      ],
    },
  ],
};
*/

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'We would love to hear from you!',
    tagline: 'Contact',
  },
  content:
    "We would love to hear from you! Whether you have questions, want to get involved, or are interested in partnering with us, please don't hesitate to reach out.",
  items: [
    {
      title: 'Our Address',
      description: ['Based in Dublin, CA, with global initiatives.'],
      icon: 'IconMapPin',
    },
    {
      title: 'Contact',
      description: ['Email: srikanthsamy@reeflect.org'],
      icon: 'IconPhoneCall',
    },
    {
      title: 'Connect Online',
      description: ['Follow our journey and updates on social media.'],
      icon: 'IconUsers',
    },
  ],
  form: {
    title: 'Send Us a Message',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data (generic one at the bottom, might be removable if new CTAs are better placed)
export const callToAction2Home: CallToActionProps = {
  title: 'Support Our Mission',
  subtitle:
    'Help us protect our oceans. Your support, whether through volunteering, partnership, or donations, makes a difference.',
  callToAction: {
    text: 'Donate Now',
    href: '/contact',
    icon: 'IconDroplet',
  },
  items: [
    {
      title: 'Volunteer Your Skills',
      description: 'Join our team and contribute your expertise.',
      href: 'https://vke4l91re98.typeform.com/to/HhXKC86e',
    },
    {
      title: 'Partner With Us',
      description: 'Collaborate on projects and initiatives.',
      href: '/contact',
    },
  ],
};
