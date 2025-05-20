'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  const titleGradientClass = "bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300";

  return (
    <motion.section
      id="heroOne"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <motion.div
            className="mx-auto max-w-4xl pb-10 text-center md:pb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tagline && (
              <motion.p
                className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {tagline}
              </motion.p>
            )}
            {title && (
              <motion.h1
                className={`leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl ${titleGradientClass}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {title}
              </motion.h1>
            )}
            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && (
                  <CTA
                    callToAction={callToAction}
                    linkClass="btn btn-primary hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
                    iconClass="w-5 h-5 md:w-6 md:h-6"
                  />
                )}
                {callToAction2 && (
                  <CTA
                    callToAction={callToAction2}
                    linkClass="btn hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
                    iconClass="w-5 h-5 md:w-6 md:h-6"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
          {image && (
            <motion.div
              className="relative m-auto max-w-5xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Image
                className="mx-auto h-auto w-full rounded-md bg-gray-400 shadow-2xl dark:bg-slate-700 transition-transform duration-300 ease-in-out hover:scale-105"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
