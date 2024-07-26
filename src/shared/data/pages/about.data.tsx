import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/71728.jpg';
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
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Empowering Ocean Conservation Through Technology',
  subtitle:
    'Reeflect leverages advanced technology and community engagement to monitor and protect ocean health. Join us in making a difference.',
  tagline: 'About Reeflect',
  callToAction: {
    text: 'Get Involved',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Reeflect Team',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 1,
      description: 'Smart Buoys Deployed',
    },
    {
      title: 3,
      description: 'People Engaged',
    },
    {
      title: 3,
      description: 'Research Partnerships',
    },
    {
      title: 0,
      description: 'Data Points Collected',
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
      'At Reeflect, our mission is to harness technology and community action to protect and preserve ocean health. By deploying smart buoys and raising public awareness, we aim to support scientific research and inspire positive change.',
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
      icon: IconBulb,
    },
    {
      title: 'Collaboration',
      description: 'We partner with researchers, organizations, and communities to amplify our impact.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Transparency',
      description: 'We ensure open access to our data and findings to foster trust and accountability.',
      icon: IconAdjustments,
    },
    {
      title: 'Education',
      description: 'We empower communities with knowledge to inspire action and stewardship.',
      icon: IconBook,
    },
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable practices that protect our oceans for future generations.',
      icon: IconHomeEco,
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of ethics and responsibility in all our endeavors.',
      icon: IconScale,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'Our Journey',
    subtitle: 'Discover the milestones that have shaped Reeflect.',
    tagline: 'Our Story',
  },
  items: [
    {
      title: 'Foundation',
      description: 'Reeflect was founded with a mission to leverage technology for ocean conservation.',
      icon: IconNumber1,
    },
    {
      title: 'Early Development',
      description: 'We developed our first prototypes and formed key research partnerships.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description: 'We expanded our operations, deploying more smart buoys and engaging more communities.',
      icon: IconNumber3,
    },
    {
      title: 'Recognition',
      description: 'Our efforts were recognized with awards for innovation and sustainability.',
      icon: IconNumber4,
    },
    {
      title: 'Ongoing Commitment',
      description: 'We continue to innovate and collaborate to protect our oceans.',
      icon: IconNumber5,
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
      icon: IconFlame,
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships.',
      icon: IconPuzzle2,
    },
    {
      title: 'Learning',
      description: 'We promote continuous learning and growth within our team and community.',
      icon: IconBook,
    },
    {
      title: 'Community Engagement',
      description: 'We actively involve and educate communities in our mission.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Design Excellence',
      description: 'We prioritize quality and sustainability in all our projects.',
      icon: IconPalette,
    },
    {
      title: 'Work-Life Balance',
      description: 'We support the well-being of our team members.',
      icon: IconScale,
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
      icon: IconAward,
    },
    {
      title: 'Innovator of the Year',
      description: 'Our groundbreaking work earned us the Innovator of the Year award.',
      icon: IconAward,
    },
    {
      title: 'Sustainability Award',
      description: 'We received the Sustainability Award for our commitment to protecting marine ecosystems.',
      icon: IconAward,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet Our Team',
    subtitle:
      'Our dedicated team is the driving force behind Reeflect.',
    tagline: 'Our Team',
  },
  teams: [
    {
      name: 'John Peterson',
      occupation: 'Founder & CEO',
      image: {
        src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'John Peterson',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sarah Mitchell',
      occupation: 'Chief Creative Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Sarah Mitchell',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'David Foster',
      occupation: 'Chief Technology Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
        alt: 'David Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Mary Smith',
      occupation: 'Chief Marketing Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Mary Smith',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Michael Turner',
      occupation: 'Chief Financial Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Michael Turner',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Laura Adams',
      occupation: 'Chief Customer Relations Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Laura Adams',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Robert Williams',
      occupation: 'Chief Operations Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Robert Williams',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Emily Davis',
      occupation: 'Chief Strategy Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Emily Davis',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
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
    title: 'Our Success Stories',
    tagline: 'Community Feedback',
  },
  testimonials: [
    {
      name: 'Jane Smith',
      job: 'Marine Biologist',
      testimonial: `Reeflect's data has been invaluable for my research. The real-time monitoring system is a game-changer for understanding ocean health.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Jane Smith',
      },
      href: '/',
    },
    {
      name: 'John Doe',
      job: 'Environmental Advocate',
      testimonial: `Reeflect's efforts in raising awareness about ocean pollution have been phenomenal. Their data-driven approach brings much-needed transparency.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'John Doe',
      },
      href: '/',
    },
    {
      name: 'Emily Turner',
      job: 'Community Leader',
      testimonial: `The workshops conducted by Reeflect have educated our community about the importance of ocean conservation. The impact is visible and inspiring.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emily Turner',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-about',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our work and mission.',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Reeflect is a non-profit organization dedicated to protecting ocean health through technology and community engagement.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Our work is guided by innovation, collaboration, transparency, education, sustainability, and integrity.`,
    },
    {
      title: 'What is our experience?',
      description: `Our team comprises experts in marine biology, data science, technology, and community outreach.`,
    },
    {
      title: 'What is our team like?',
      description: `Our team is passionate, dedicated, and committed to making a positive impact on ocean conservation.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `We conduct workshops, educational programs, and community events to raise awareness and promote sustainable practices.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `We offer various support channels including email, phone, and social media to assist our community and partners.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Contact Us',
    tagline: 'Get in Touch',
  },
  content:
    'We would love to hear from you! Whether you have questions, want to get involved, or are interested in partnering with us, please don’t hesitate to reach out.',
  items: [
    {
      title: 'Our Address',
      description: ['123 Ocean Avenue', 'San Francisco, CA, USA'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Phone: +1 (123) 456-7890', 'Email: info@reeflect.org'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working Hours',
      description: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      icon: IconClock,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Introduce your name',
        autocomplete: 'off',
      },
      {
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'Introduce your email address',
        autocomplete: 'on',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'message',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'I have read and agree to the privacy policy',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};