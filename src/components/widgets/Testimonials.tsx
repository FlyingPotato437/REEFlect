'use client';

import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconQuote, IconStar, IconHeart, IconAward } from '@tabler/icons-react';
import Image from 'next/image';

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3
      }
    }
  };

  return (
    <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-50/20 to-transparent rounded-3xl" />
      
      {header && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Headline 
            header={header} 
            titleClass="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-ocean-900 via-primary-800 to-secondary-800 bg-clip-text text-transparent mb-6" 
            subtitleClass="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
          />
        </motion.div>
      )}

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10"
      >
        {testimonials.map(({ name, job, testimonial, image, href }, index) => (
          <motion.div
            key={`testimonial-${index}`}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group relative"
          >
            {/* Testimonial Card */}
            <div className="glass backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-primary-300/30 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/10 to-secondary-50/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote Icon */}
              <motion.div
                variants={quoteVariants}
                className="absolute top-6 right-6 w-12 h-12 bg-gradient-ocean rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-ocean"
              >
                <IconQuote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Testimonial Text */}
                <div className="flex-grow mb-6">
                  <div 
                    className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg italic mb-6"
                    dangerouslySetInnerHTML={{ __html: testimonial || '' }}
                  />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-primary-300/50 transition-colors duration-300">
                      {typeof image === 'string' ? (
                        <Image
                          src={image}
                          alt={name || 'Team member'}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={image?.src || ''}
                          alt={image?.alt || name || 'Team member'}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-500 rounded-full border-2 border-white flex items-center justify-center">
                      <IconStar className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Name and Job */}
                  <div className="flex-grow">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {job}
                    </p>
                  </div>

                  {/* Role Badge */}
                  <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-ocean-100 to-secondary-100 dark:from-ocean-900 dark:to-secondary-900 rounded-full">
                    <IconHeart className="w-3 h-3 text-primary-600" />
                    <span className="text-xs font-medium text-primary-700 dark:text-primary-300">
                      {index < 3 ? 'Team' : 'Partner'}
                    </span>
                  </div>
                </div>

                {/* Link Action */}
                {href && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Link 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      <span>Connect</span>
                      <IconAward className="w-4 h-4" />
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-secondary-400 to-ocean-400 rounded-full opacity-70 blur-sm"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary-400 to-coral-400 rounded-full opacity-60 blur-sm"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      {callToAction && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <CTA
              callToAction={callToAction}
              containerClass=""
              linkClass="inline-flex items-center gap-3 bg-gradient-ocean text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-ocean/25"
              iconClass="w-5 h-5 transition-transform group-hover:translate-x-1"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Bottom decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex justify-center mt-12"
      >
        <div className="flex gap-3">
          {[IconHeart, IconStar, IconAward].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="w-8 h-8 bg-gradient-to-r from-secondary-200 to-ocean-200 rounded-xl flex items-center justify-center"
            >
              <Icon className="w-4 h-4 text-primary-600" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </WidgetWrapper>
  );
};

export default Testimonials;
