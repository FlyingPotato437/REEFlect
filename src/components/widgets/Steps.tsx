'use client';

import Image from 'next/image';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';
import { motion } from 'framer-motion';

const Steps = ({
  id,
  header,
  items,
  isImageDisplayed = true,
  image,
  isReversed = false,
  hasBackground = false,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        isImageDisplayed ? 'md:flex-row' : ''
      }`}
    >
      <motion.div
        className={`md:py-4 ${
          isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'
        }`}
        initial={{ opacity: 0, x: isReversed && isImageDisplayed ? 50 : (isImageDisplayed ? -50 : 0) }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {header && (
          <Headline
            header={header}
            containerClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
            titleClass="text-3xl sm:text-4xl"
            subtitleClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
          />
        )}
        <Timeline items={items} defaultIcon="IconCheck" iconClass="text-primary border-primary-900" />
      </motion.div>
      {isImageDisplayed && (
        <motion.div
          className="relative md:basis-1/2"
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {image && (
            <Image
              src={image.src}
              width={400}
              height={768}
              alt={image.alt}
              placeholder="blur"
              className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700 transition-transform duration-300 ease-in-out hover:scale-105"
              quality={50}
            />
          )}
        </motion.div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;
