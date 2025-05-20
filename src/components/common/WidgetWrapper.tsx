'use client';

import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { WrapperTagProps } from '~/shared/types';
import Background from './Background';

const WidgetWrapper = ({ children, id, hasBackground, containerClass }: WrapperTagProps) => (
  <motion.section
    className="relative not-prose scroll-mt-[72px]"
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
  >
    <Background hasBackground={hasBackground} />
    <div
      className={twMerge(
        'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
        containerClass,
      )}
    >
      {children}
    </div>
  </motion.section>
);

export default WidgetWrapper;
