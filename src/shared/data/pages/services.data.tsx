import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/photo-1595902392285-46fccaab598a_q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.jpg';
import cameraFrontImg from '~/assets/images/IMG_5297_edited.png';
import cameraBackImg from '~/assets/images/71728_edited.png';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Pojects at REEFlect',
  subtitle:
    'REEFlect has many impactful projects. Here is some key information on them.',
  callToAction: {
    text: 'Start Exploring',
    href: 'https://reeflect.org/Services',
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
    title: 'Our Services',
  },
  items: [
    {
      title: 'Real-Time Ocean Monitoring',
      description: 'Utilizing advanced sensors and smart buoys to monitor ocean health parameters in real-time.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Data Analytics and Visualization',
      description: 'Providing comprehensive data analysis and visualization tools to interpret ocean health data.',
      icon: IconComponents,
    },
    {
      title: 'Community Engagement Programs',
      description: 'Organizing workshops and educational programs to raise awareness and promote ocean conservation such as our Childrens Book.',
      icon: IconListCheck,
    },
    {
      title: 'Research Partnerships',
      description: 'Collaborating with research institutions to enhance our understanding of ocean health.',
      icon: IconRocket,
    },
    {
      title: 'Public Awareness Campaigns',
      description:
        'Launching campaigns to inform the public about the importance of protecting our oceans.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Innovation and Technology Development',
      description: 'Continuously developing and implementing new technologies to improve ocean conservation efforts.',
      icon: IconBulb,
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
    title: 'Main Features',
    subtitle:
      'Reeflect offers a range of services designed to monitor, analyze, and protect ocean health through innovative technology and community engagement.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Ocean Conservation Technology',
  },
  items: [
    {
      title: 'Real-Time Ocean Monitoring',
      description: 'Utilizing advanced sensors and smart buoys to monitor ocean health parameters in real-time.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Data Analytics and Visualization',
      description: 'Providing comprehensive data analysis and visualization tools to interpret ocean health data.',
      icon: IconComponents,
    },
    {
      title: 'Community Engagement Programs',
      description: 'Organizing workshops and educational programs to raise awareness and promote ocean conservation.',
      icon: IconListCheck,
    },
    {
      title: 'Research Partnerships',
      description: 'Collaborating with research institutions to enhance our understanding of ocean health.',
      icon: IconRocket,
    },
    {
      title: 'Public Awareness Campaigns',
      description:
        'Launching campaigns to inform the public about the importance of protecting our oceans.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Innovation and Technology Development',
      description: 'Continuously developing and implementing new technologies to improve ocean conservation efforts.',
      icon: IconBulb,
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
      icon: IconChevronsRight,
    },
    {
      title: 'How can I get involved with Reeflect?',
      description: `You can get involved by participating in our community programs, attending our workshops, volunteering, or partnering with us for research and conservation initiatives.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How does Reeflect collect ocean data?',
      description: `We deploy smart buoys equipped with advanced sensors that collect real-time data on various ocean health parameters such as temperature, pH, salinity, and pollutants.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How is the collected data used?',
      description: `The collected data is analyzed and visualized to provide insights into ocean health. It is used for scientific research, public awareness campaigns, and to inform policy-making for ocean conservation.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How does Reeflect ensure data accuracy?',
      description: `We use state-of-the-art sensors and rigorous data validation methods to ensure the accuracy and reliability of the data we collect.`,
      icon: IconChevronsRight,
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