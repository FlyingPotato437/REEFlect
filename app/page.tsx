import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Contact from '~/components/widgets/Contact';
import CallToAction from '~/components/widgets/CallToAction';

import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  featuresResearchAndInnovation,
  heroHome,
  stepsHome,
  testimonialsHome,
  callToActionVolunteer,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Features {...featuresResearchAndInnovation} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <CallToAction {...callToActionVolunteer} />
      <FAQs2 {...faqs2Home} />
      <Contact {...contactHome} />
      <CallToAction {...callToAction2Home} />
    </>
  );
}
