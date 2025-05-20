'use client';

import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const CallToAction = ({ title, subtitle, callToAction, id, hasBackground = false }: CallToActionProps) => {
  const { text, href } = callToAction as CallToActionType;
  const titleGradientClass = "bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300";

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <motion.div
        className="card mx-auto max-w-3xl p-6 text-center bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-700/50 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <motion.h2
            className={twMerge(`leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl ${titleGradientClass}`, '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            className="text-xl text-gray-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          >
          </motion.p>
        )}
        {text && href && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CTA
              callToAction={callToAction as CallToActionType}
              containerClass="mt-6 sm:mx-auto sm:w-fit"
              linkClass="btn btn-primary hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
            />
          </motion.div>
        )}
      </motion.div>
    </WidgetWrapper>
  );
};

export default CallToAction;
