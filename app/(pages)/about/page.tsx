import { Metadata } from 'next';
import { SITE } from '~/config.js';

// Import Widgets
import Hero from '~/components/widgets/Hero';
import Stats from '~/components/widgets/Stats';
import Features from '~/components/widgets/Features'; // For Mission/Values, Global Impact, R&D
import Steps from '~/components/widgets/Steps';
// import Features3 from '~/components/widgets/Features3'; // Original, can be replaced or kept if style is different
import Team from '~/components/widgets/Team';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs from '~/components/widgets/FAQs';
import Contact from '~/components/widgets/Contact';
import Content from '~/components/widgets/Content'; // For Volunteer Program
import CallToAction from '~/components/widgets/CallToAction'; // For Patch Article CTA

// Import Data for About Page
import {
  hero2About,
  statsAbout,
  // featuresFourAbout, // Replaced by missionAndValuesAbout
  // featuresFourAboutTwo, // Merged into missionAndValuesAbout
  missionAndValuesAbout, // New combined section
  globalImpactAbout, // New section
  researchDevelopmentAbout, // New section
  volunteerProgramAbout, // New section
  patchArticleAboutCTA, // New section
  stepsAbout, // Kept as is for now, original content was generic journey
  // features3About, // Original "Our Culture", can be re-added if desired
  // featuresAbout, // Original "Achievements", can be re-added or information merged
  teamAbout,
  testimonials2About, // Renamed to avoid conflict if a testimonialsAbout exists
  faqsAbout,
  contactAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About Us - ${SITE.name}`,
};

export default function Page() {
  return (
    <>
      <Hero {...hero2About} />
      <Stats {...statsAbout} />
      <Features {...missionAndValuesAbout} /> 
      <Features {...globalImpactAbout} />
      <CallToAction {...patchArticleAboutCTA} /> {/* Patch Article CTA */}
      <Content {...volunteerProgramAbout} /> {/* Volunteer Program Info */}
      <Features {...researchDevelopmentAbout} />
      {/* <Steps {...stepsAbout} /> */}{/* Decide if this generic Journey section is still needed or if content was merged */}
      {/* <Features3 {...features3About} /> */}{/* Original Culture section - decide if to keep/merge */}
      {/* <Features {...featuresAbout} /> */}{/* Original Achievements - decide if to keep/merge */}
      <Team {...teamAbout} />
      <Testimonials {...testimonials2About} />
      <FAQs {...faqsAbout} />
      <Contact {...contactAbout} />
    </>
  );
} 