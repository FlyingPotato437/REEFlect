import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconMovie,
  IconAward,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/KrishivlikesBags.png';
import cameraFrontImg from '~/assets/images/New1.png';
import cameraBackImg from '~/assets/images/Screenshot 2024-09-22 at 5.05.26 PM.png';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Services at REEFlect', 
  subtitle:
    'REEFlect has many services to offer to partnering organizations. These are a few ways we can help',
  callToAction: {
    text: 'Start Exploring',
    href: '/services',
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero Reeflect',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Core Services',
    subtitle: "REEFlect offers a suite of services leveraging technology and community engagement for ocean conservation, supported by grants and public funding.",
  },
  items: [
    {
      title: 'Real-Time Ocean Monitoring',
      description: 'Utilizing advanced sensors and smart buoys (like those deployed in Ghana) to monitor ocean health parameters in real-time. Data shared via <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a>.',
      icon: 'IconBrandTailwind',
    },
    {
      title: 'Data Analytics & Visualization',
      description: 'Providing comprehensive data analysis and visualization tools to interpret ocean health data from our global buoy network.',
      icon: 'IconComponents',
    },
    {
      title: 'Community Engagement & Education',
      description: 'Organizing workshops, educational programs (e.g., our Childrens Book), and impactful events like climate movie showings in Ghana to raise awareness.',
      icon: 'IconMovie',
    },
    {
      title: 'Research Partnerships & Support',
      description: 'Collaborating with research institutions to enhance our understanding of ocean health and providing access to our open-source technologies and data.',
      icon: 'IconRocket',
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'Reeflect leverages cutting-edge technology to monitor and protect ocean health. Our smart buoys and advanced sensors provide real-time data that supports scientific research and informs public awareness.',
  items: [
    {
      title: 'Real-Time Data Collection',
      description:
        'Our smart buoys collect data on temperature, pH, salinity, and other critical parameters, providing a comprehensive view of ocean health.',
    },
    {
      title: 'Advanced Data Analysis',
      description:
        'We use sophisticated data analytics to process and interpret the collected data, turning it into actionable insights.',
    },
    {
      title: 'Community Involvement',
      description:
        'We engage local communities through workshops and educational programs, empowering them to take part in ocean conservation.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Ocean Monitoring Equipment',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    'Through our partnerships with research institutions and our innovative technology, Reeflect is making significant strides in understanding and protecting our oceans.',
  items: [
    {
      title: 'Research Collaborations',
      description:
        'We partner with leading research institutions to enhance the scope and impact of our data.',
    },
    {
      title: 'Innovative Technology',
      description:
        'Our team continuously develops new technologies to improve the accuracy and efficiency of our monitoring efforts.',
    },
    {
      title: 'Public Education',
      description:
        'We believe in the power of education to drive change. Our programs aim to educate kids about ocean awareness.',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Research Collaboration',
  },
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Technology & Impact Showcase',
    subtitle:
      'Explore the capabilities of our open-source smart buoys and the tangible results of our global conservation efforts, including our work in Ghana.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Ocean Conservation Technology',
  },
  items: [
    {
      title: 'Open-Source Smart Buoys',
      description: 'Deployed in locations like Ghana, our buoys provide continuous, real-time data (temperature, pH, etc.) accessible on <a href="https://www.openoceans.life/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">openoceans.life</a>.',
      icon: 'IconDroplet',
    },
    {
      title: 'Community-Driven Data',
      description: 'Empowering local schools, NGOs, and citizen scientists with low-cost tools for marine research and education.',
      icon: 'IconUsers',
    },
    {
      title: 'Successful Ghana Climate Awareness',
      description: 'Our climate movie showings in Ghana, alongside beach cleanups, have significantly boosted local engagement and conservation dialogue.',
      icon: 'IconFilm',
    },
    {
      title: 'Funded for Impact',
      description: 'Supported by organizations like the Awesome Foundation ($15k) and community donations (over $11.5k), enabling wider deployment and R&D.',
      icon: 'IconAward',
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-services',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Community Feedback',
    subtitle:
      'See what our partners and participants have to say about our initiatives.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Marine Scientist',
      testimonial: `Reeflect's technology has revolutionized our research. The real-time data we receive from their smart buoys is invaluable.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Environmental Activist',
      testimonial: `Reeflect's educational programs have made a huge impact in our community, raising awareness and inspiring action.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Community Leader',
      testimonial: `The workshops and events hosted by Reeflect have been incredibly educational and engaging. Our community has learned so much about ocean conservation.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/testimonials',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Find answers to frequently asked questions about our services and mission.',
  },
  columns: 1,
  items: [
    {
      title: 'What services does Reeflect offer?',
      description: `Reeflect offers real-time ocean monitoring, data analytics and visualization, community engagement programs, research partnerships, public awareness campaigns, and continuous innovation in technology development.`,
      icon: 'IconChevronsRight',
    },
    {
      title: 'How can I get involved with Reeflect?',
      description: `You can get involved by participating in our community programs, attending our workshops, volunteering, or partnering with us for research and conservation initiatives.`,
      icon: 'IconChevronsRight',
    },
    {
      title: 'How does Reeflect collect ocean data?',
      description: `We deploy smart buoys equipped with advanced sensors that collect real-time data on various ocean health parameters such as temperature, pH, salinity, and pollutants.`,
      icon: 'IconChevronsRight',
    },
    {
      title: 'How is the collected data used?',
      description: `The collected data is analyzed and visualized to provide insights into ocean health. It is used for scientific research, public awareness campaigns, and to inform policy-making for ocean conservation.`,
      icon: 'IconChevronsRight',
    },
    {
      title: 'How does Reeflect ensure data accuracy?',
      description: `We use state-of-the-art sensors and rigorous data validation methods to ensure the accuracy and reliability of the data we collect.`,
      icon: 'IconChevronsRight',
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
    'If you have any more questions or need further information, feel free to reach out to us.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};