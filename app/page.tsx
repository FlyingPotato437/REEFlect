import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
// import SocialProof from '../src/components/widgets/SocialProof'; // Comment out SocialProof import
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
// import Team from '~/components/widgets/Team'; // Commented out as per request
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
  // socialProofHome, // Comment out socialProofHome import
  stepsHome,
  // teamHome, // Commented out as per request
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
      {/* <SocialProof {...socialProofHome} /> */}{/* Comment out SocialProof component usage */}
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Features {...featuresResearchAndInnovation} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <CallToAction {...callToActionVolunteer} />
      {/* <Team {...teamHome} /> */}{/* Commented out as per request */}
      <Contact {...contactHome} />
      <CallToAction {...callToAction2Home} />
    </>
  );
}
