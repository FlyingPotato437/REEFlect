import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Thank you for considering Reeflect! We're excited to hear from you.`}</span>{' '}
      {`Our team is ready to assist you in all your ocean conservation needs.`}
    </>
  ),
  tagline: 'Contact Reeflect',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['123 Ocean Avenue', 'San Francisco, CA, USA'],
      icon: 'IconMapPin',
    },
    {
      title: 'Contact',
      description: ['Phone: +1 (123) 456-7890', 'Email: info@reeflect.org'],
      icon: 'IconPhoneCall',
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      icon: 'IconClock',
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'firstName',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Partnerships',
        },
        {
          label: 'Others',
        },
      ],
    },
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
      {
        label: 'I want to receive monthly updates by email',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: 'IconHelp',
      callToAction: {
        text: 'Go to FAQ page',
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: 'IconMessages',
      callToAction: {
        text: 'Write to us',
        href: '/contact',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: 'IconHeadset',
      callToAction: {
        text: 'Call us',
        href: 'tel:+11234567890',
      },
    },
  ],
};