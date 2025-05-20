'use client';

import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <motion.div
      className="flex items-stretch justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map(
          ({ name, job, testimonial, image, href }, index) =>
            testimonial && (
              <motion.div
                key={`item-testimonial-${index}`}
                className={`card max-w-sm h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden dark:bg-slate-800 ${ 
                  !callToAction && href
                    ? 'hover:border-blue-500 border border-transparent' 
                    : 'border border-transparent'
                }`}
                variants={itemVariants}
              >
                {!callToAction && href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    <ItemTestimonial
                      name={name}
                      job={job}
                      testimonial={testimonial}
                      isTestimonialUp={isTestimonialUp}
                      hasDividerLine={true}
                      image={image}
                      containerClass="h-full flex flex-col p-6"
                      panelClass="flex-grow flex flex-col justify-between items-stretch w-full h-full"
                      nameJobClass="text-left rtl:text-right"
                      jobClass="text-sm text-primary-600 dark:text-primary-400"
                      testimonialClass="italic text-gray-700 dark:text-slate-300 my-4"
                      imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-12 w-12 rounded-full"
                    />
                  </Link>
                ) : (
                  <ItemTestimonial
                    name={name}
                    job={job}
                    testimonial={testimonial}
                    isTestimonialUp={isTestimonialUp}
                    hasDividerLine={true}
                    image={image}
                    containerClass="h-full flex flex-col p-6"
                    panelClass="flex-grow flex flex-col justify-between items-stretch w-full h-full"
                    nameJobClass="text-left rtl:text-right"
                    jobClass="text-sm text-primary-600 dark:text-primary-400"
                    testimonialClass="italic text-gray-700 dark:text-slate-300 my-4"
                    imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-12 w-12 rounded-full"
                  />
                )}
              </motion.div>
            ),
        )}
      </div>
    </motion.div>
    {callToAction && (
      <motion.div
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: testimonials.length * 0.1 + 0.2}}
      >
        <CTA
          callToAction={callToAction}
          containerClass="flex justify-center mx-auto w-fit mt-8 md:mt-12"
          linkClass="btn btn-primary hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
        />
      </motion.div>
    )}
  </WidgetWrapper>
);

export default Testimonials;
