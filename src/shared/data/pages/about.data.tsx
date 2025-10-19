import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
// import hero2Img from '~/assets/images/Screenshot 2024-09-22 at 5.02.00 PM.png'; // Commented out for now
//import krishivimg from '~/assets/images/Screenshot 2024-07-26 at 3.13.17 PM.png';
//import srikanthimg from '~/assets/images/thegoat.jpeg';
//import akhilimg from '~/assets/images/akhilpic.png';
//import aaryanimg from '~/assets/images/newcmopic.png';
//import adiimg from '~/assets/images/adipic.png';
//import rohanimg from '~/assets/images/rohanpic.png';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
  IconWorld,
  IconMovie,
  IconCash,
  IconMicroscope,
  IconUsers,
  IconDroplet,
  IconRocket,
  IconArticle,
  IconComponents,
} from '@tabler/icons-react';

// Image Imports
import hero2Img from '~/assets/images/REEFlect1.png'; // Using ~ alias and standard space
//import hero2ImgPlaceholder from '~/assets/images/girma-nigusse-dnXVrFuM3c8-unsplash.jpg';
import srikanthCleanupImg from '~/assets/images/SrikanthCleanup.png';
import krishivServicesHeroImg from '~/assets/images/KrishivlikesBags.png'; // Using ~ alias and standard space
import adiPicImg from '~/assets/images/adipic.png';
// import aaryanimg from '~/assets/images/newcmopic.png'; // Aanya Sheth removed
import cleanupGenericImg from '~/assets/images/cleanup.png';

// Assuming this one is valid and available as a generic placeholder:
import genericPlaceholderImg from '~/assets/images/girma-nigusse-dnXVrFuM3c8-unsplash.jpg'; 

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Youth-Led Ocean Innovation for a Planet in Crisis.',
  subtitle:
    'REEFlect is a student-founded 501(c)(3) nonprofit reshaping how the next generation tackles ocean and climate challenges. Our work is rooted in action—blending science, engineering, and education to create real-world environmental impact.',
  tagline: 'About REEFlect',
  callToAction: {
    text: 'Join Our Mission',
    href: 'https://vke4l91re98.typeform.com/to/HhXKC86e',
    targetBlank: true,
    icon: 'IconUsers',
  },
  image: {
    src: hero2Img,
    alt: 'REEFlect Impact Showcase',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: false,
  items: [
    {
      title: '$12,000',
      description: 'Secured funding including $11k from 1517 Fund & $1k from COPG collaboration',
    },
    {
      title: '3+ Countries',
      description: 'Active projects (USA, Ghana & Mozambique)',
    },
    {
      title: 'Open Data',
      description: 'Via <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">OpenOceans.life</a>',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our Mission',
    subtitle:
      'At REEFlect, our mission is to harness technology and community action to protect and preserve ocean health. By deploying smart buoys and raising public awareness, we aim to support scientific research and inspire positive change.',
    tagline: 'Mission and Values',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our Values',
    subtitle: 'Our core values guide our work and define who we are.',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to solve complex ocean health challenges.',
      icon: 'IconBulb',
    },
    {
      title: 'Collaboration',
      description: 'We partner with researchers, organizations, and communities to amplify our impact.',
      icon: 'IconHeartHandshake',
    },
    {
      title: 'Transparency',
      description: 'We ensure open access to our data and findings to foster trust and accountability.',
      icon: 'IconAdjustments',
    },
    {
      title: 'Education',
      description: 'We empower communities with knowledge to inspire action and stewardship.',
      icon: 'IconBook',
    },
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable practices that protect our oceans for future generations.',
      icon: 'IconHomeEco',
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of ethics and responsibility in all our endeavors.',
      icon: 'IconScale',
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our Culture',
    subtitle:
      'At Reeflect, our culture is built on innovation, collaboration, and a shared passion for ocean conservation.',
    tagline: 'Culture and Values',
  },
  items: [
    {
      title: 'Innovation',
      description: 'We continuously seek new and effective ways to protect our oceans.',
      icon: 'IconFlame',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships.',
      icon: 'IconPuzzle2',
    },
    {
      title: 'Learning',
      description: 'We promote continuous learning and growth within our team and community.',
      icon: 'IconBook',
    },
    {
      title: 'Community Engagement',
      description: 'We actively involve and educate communities in our mission.',
      icon: 'IconCirclesRelation',
    },
    {
      title: 'Design Excellence',
      description: 'We prioritize quality and sustainability in all our projects.',
      icon: 'IconPalette',
    },
    {
      title: 'Work-Life Balance',
      description: 'We support the well-being of our team members.',
      icon: 'IconScale',
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our Achievements',
    subtitle:
      'We are proud of the impact we have made in ocean conservation.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global Recognition',
      description: 'Reeflect has been recognized globally for our innovative approach to ocean conservation.',
      icon: 'IconAward',
    },
    {
      title: 'Innovator of the Year',
      description: 'Our groundbreaking work earned us the Innovator of the Year award.',
      icon: 'IconAward',
    },
    {
      title: 'Sustainability Award',
      description: 'We received the Sustainability Award for our commitment to protecting marine ecosystems.',
      icon: 'IconAward',
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet Our Leadership Team',
    subtitle: 'The driving force behind REEFlect\'s vision and execution.',
    tagline: 'Our Team',
  },
  teams: [
    {
      name: 'Srikanth Samy',
      occupation: 'Co-Founder',
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

  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'What Our Partners & Community Say',
    tagline: 'Testimonials',
  },
  testimonials: [
    {
      name: 'Clean Ocean Project Ghana',
      job: 'Partner Organization',
      testimonial: `Our partnership with REEFlect has been transformative. Together we've organized impactful beach cleanups in Ghana and the United States, combining our on-ground expertise with their innovative technology approach. Their youth-driven energy is inspiring real change in coastal communities globally.`,
      image: {
        src: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        alt: 'Ghana Collaboration',
      },
      href: '#',
    },

  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-about',
  hasBackground: false,
  header: {
    title: 'More About REEFlect',
    subtitle: 'Answers to common questions about our organization, impact, and how we operate.',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'What is REEFlect\'s legal status?',
      description: `REEFlect is a registered 501(c)(3) non-profit organization founded by high school students, committed to marine conservation through technology.`,
    },
    {
      title: 'How does REEFlect utilize its funding?',
      description: `All funding, including $11k from the 1517 Fund and $1k from our COPG collaboration, directly supports our project deployments (like smart buoys in Ghana), R&D, educational programs, and operational costs for scaling our impact.`,
    },
    {
      title: 'What are REEFlect\'s key areas of technological innovation?',
      description: `We focus on open-source smart buoy technology with LoRa communication and Raspberry Pi base stations for real-time ocean data (accessible on <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a>), and applying machine learning to oceanographic data.`,
    },
    {
      title: 'How can I volunteer or contribute to REEFlect?',
      description: `We are building a robust infrastructure to scale our efforts, including dedicated volunteer outreach, comprehensive onboarding tracks (Marketing, Engineering, International Chapters, Creative/Design), and standardized email templates. <a href="https://vke4l91re98.typeform.com/to/HhXKC86e" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Apply via Typeform</a> to connect with a global team of innovators and activists!`,
    },
    {
      title: 'Where does REEFlect operate?',
      description: `While founded in Dublin, CA, REEFlect has a global vision with projects internationally, including comprehensive engagement in Ghana (cleanups, movie showings, buoy deployment), US beach cleanups with COPG, and mangrove reforestation in Mozambique with WFP and Planet Multiservices (PMS).`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Connect With Us',
    subtitle: "We're always eager to hear from potential volunteers, partners, and supporters.",
    tagline: 'Get in Touch',
  },
  content:
    'Have questions about our projects, volunteering, or how you can support REEFlect? Reach out to us!',
  items: [
    {
      title: 'General Inquiries',
      description: ['Email: srikanthsamy@reeflect.org'],
      icon: 'IconMail',
    },
    {
      title: 'Volunteer Coordination',
      description: [`Join via: <a href="https://vke4l91re98.typeform.com/to/HhXKC86e" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Typeform Link</a>`],
      icon: 'IconUsers',
    },
  ],
  form: {
    title: 'Quick Message',
    inputs: [
      { type: 'text', label: 'Your Name', name: 'name', placeholder: 'Your Name', autocomplete: 'name' },
      { type: 'email', label: 'Your Email', name: 'email', placeholder: 'your.email@example.com', autocomplete: 'email' },
    ],
    textarea: {
      cols: 30,
      rows: 4,
      label: 'Your Message',
      name: 'message',
      placeholder: 'How can we help, or how would you like to get involved?',
    },
    btn: { title: 'Send Message', type: 'submit' },
  },
};

// New sections
export const missionAndValuesAbout: FeaturesProps = {
  id: 'mission-values-about',
  hasBackground: true,
  header: {
    title: 'Our Mission & Core Values',
    subtitle:
      "REEFlect is dedicated to reshaping how the next generation tackles ocean and climate challenges. Our work, rooted in action, blends science, engineering, and education to create real-world environmental impact, guided by these core principles:",
    tagline: 'Guiding Principles',
  },
  columns: 3,
  items: [
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge, open-source technology like our smart buoys to solve complex ocean health challenges.',
      icon: 'IconBulb',
    },
    {
      title: 'Collaboration',
      description: 'Partnering with researchers, local organizations (e.g., Clean Ocean Project Ghana), and global communities to amplify impact.',
      icon: 'IconHeartHandshake',
    },
    {
      title: 'Openness & Transparency',
      description: 'Ensuring open access to data (via <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">OpenOceans.life</a>) and findings to foster trust, accountability, and wider participation.',
      icon: 'IconAdjustments',
    },
    {
      title: 'Education & Engagement',
      description: 'Empowering communities with knowledge via workshops, film screenings (like in Ghana), and educational programs to inspire stewardship.',
      icon: 'IconBook',
    },
    {
      title: 'Sustainability',
      description: 'Committed to sustainable practices and developing low-cost, accessible solutions for long-term ocean protection.',
      icon: 'IconHomeEco',
    },
    {
      title: 'Youth-Led Action',
      description: 'Championing bold, youth-driven solutions at the intersection of climate science, education, and equity.',
      icon: 'IconFlame',
    },
  ],
};

export const globalImpactAbout: FeaturesProps = {
  id: 'global-impact-about',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Global Impact & Recent Highlights',
    subtitle: "From local shores to international waters, REEFlect is making a tangible difference. Here are some of our key achievements and ongoing efforts, fueled by generous support.",
    tagline: 'Our Success Stories',
  },
  items: [
    {
      title: 'Ghana Initiative: Cleanups & Movie Showings',
      description: "Successfully organized and led beach cleanups in Ghana (April 2025) and hosted engaging climate movie showings, fostering vital community awareness in West Africa.",
      icon: 'IconWorld',
    },
    {
      title: 'Smart Buoy Deployment in Ghana',
      description: "Deployed our open-source smart buoy in Ghana, providing real-time ocean data (temperature, etc.) accessible via <a href=\"https://www.openoceans.life/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 dark:text-primary-400 hover:underline\">openoceans.life</a>, empowering local research and education.",
      icon: 'IconDroplet',
    },
    {
      title: 'Key Funding Secured',
      description: "Secured $12,000 in vital funding including $11k from the 1517 Fund and $1k from our COPG collaboration, enabling project development and expansion.",
      icon: 'IconAward',
    },
    {
      title: 'Mozambique Mangrove Restoration',
      description: "Partnering with the World Food Programme (WFP) and Planet Multiservices (PMS), a local NPO in Mozambique, on mangrove reforestation initiatives to protect coastal ecosystems and support community resilience.",
      icon: 'IconHomeEco',
    },
  ],
};

export const researchDevelopmentAbout: FeaturesProps = {
  id: 'research-development-about',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Advancing Marine Science through R&D',
    subtitle: "Our commitment to innovation extends to dedicated research and development projects aimed at creating new tools for ocean conservation, from AI-driven data analysis to novel sensor technologies.",
    tagline: 'Tech for Science',
  },
  items: [
    {
      title: 'Advanced Coral Metrics',
      description: "Leveraging learnings from an AIMS internship, we are working on tools to analyze underwater imagery and extract key coral health metrics.",
      icon: 'IconMicroscope',
    },
    {
      title: 'Machine Learning in Oceanography',
      description: "Exploring applications of Machine Learning, like Gaussian Processes for Sea Surface Temperature (SST) prediction, to enhance oceanographic data analysis from our smart buoy network.",
      icon: 'IconComponents',
    },
  ],
};

export const volunteerProgramAbout: ContentProps = {
  id: 'volunteer-program-about',
  hasBackground: true,
  header: {
    title: 'Join Our Dedicated Volunteer Team',
    subtitle: "REEFlect's impact is amplified by our passionate global volunteers. We've developed structured programs and resources to help you contribute effectively and grow with us.",
    tagline: 'Get Involved & Make a Difference',
  },
  content: `We are building a robust infrastructure to scale our efforts, including dedicated volunteer outreach, comprehensive onboarding tracks (Marketing, Engineering, International Chapters, Creative/Design), and standardized email templates. <a href="https://vke4l91re98.typeform.com/to/HhXKC86e" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Apply via Typeform</a> to connect with a global team of innovators and activists!`,
  image: {
    src: cleanupGenericImg,
    alt: 'REEFlect Volunteers Collaborating'
  },
  isReversed: true,
};

export const patchArticleAboutCTA: CallToActionProps = {
  id: 'patch-article-about-cta',
  hasBackground: false,
  title: 'REEFlect Featured in the Dublin Patch!',
  subtitle: "Learn more about our roots, local impact, and international efforts in this community spotlight.",
  callToAction: {
    text: 'Read Full Article',
    href: 'https://patch.com/california/dublin/dublin-student-nonprofit-helps-clean-beaches-around-bay-ghana',
    targetBlank: true,
    icon: 'IconArticle',
  },
};
