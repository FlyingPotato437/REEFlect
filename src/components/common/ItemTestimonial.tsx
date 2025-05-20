'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Testimonial } from '~/shared/types';
import { motion } from 'framer-motion';
import DividerLine from './DividerLine';

const ItemTestimonial = ({
  name,
  job,
  testimonial,
  image,
  isTestimonialUp = false,
  hasDividerLine = false,
  startSlice = 0,
  endSlice,
  containerClass,
  panelClass,
  imageClass,
  dataClass,
  nameJobClass,
  nameClass,
  jobClass,
  testimonialClass,
}: Testimonial) => {
  const testimonialContent = testimonial?.slice(startSlice, endSlice);

  const commonElements = (
    <>
      {image && image.src && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Image src={image.src} width={48} height={48} alt={image.alt || ''} className={twMerge('', imageClass)} />
        </motion.div>
      )}
      <div className={twMerge('ml-4 rtl:ml-0 rtl:mr-4', dataClass)}>
        {(name || job) && (
          <motion.div 
            className={twMerge('mb-0.5 font-semibold text-gray-900 dark:text-white', nameJobClass)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {name && <h3 className={twMerge('font-bold', nameClass)}>{name}</h3>}
            {job && <p className={twMerge('text-gray-600 dark:text-slate-400', jobClass)}>{job}</p>}
          </motion.div>
        )}
      </div>
    </>
  );

  return (
    <div className={twMerge('relative flex h-full flex-col', containerClass)}>
      <div className={twMerge(`select-none ${isTestimonialUp ? 'order-1' : ''}`, panelClass)}>
        {isTestimonialUp ? (
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1}} 
            transition={{ duration: 0.3}}
          >
            {commonElements}
          </motion.div>
        ) : null}

        {testimonialContent && (
          <motion.blockquote
            className={twMerge(
              'flex-auto py-4 text-lg leading-relaxed text-gray-700 dark:text-slate-400',
              testimonialClass,
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: testimonialContent || '' }}
          >
          </motion.blockquote>
        )}

        {hasDividerLine && <hr className="my-4 border-gray-200 dark:border-slate-700" />}

        {!isTestimonialUp ? (
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1}} 
            transition={{ duration: 0.3, delay: 0.4}}
          >
            {commonElements}
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default ItemTestimonial;
