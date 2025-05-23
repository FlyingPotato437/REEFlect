'use client';

import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';
import { IconRipple, IconDroplet, IconFish, IconShield, IconHeart } from '@tabler/icons-react';

const CallToAction = ({ title, subtitle, callToAction, items, id, hasBackground = false }: CallToActionProps) => {
  const { text, href } = callToAction as CallToActionType;
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="relative overflow-hidden">
      {/* Background Ocean Scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-600 via-primary-600 to-secondary-700" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
          transition={{
            delay: i * 0.5,
            duration: 6 + Math.random() * 4,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <div className="text-center">
          {/* Decorative Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6 mb-8"
          >
            {[IconRipple, IconDroplet, IconFish, IconShield, IconHeart].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Title */}
          {title && (
            <motion.h2
              variants={itemVariants}
              className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-ocean-100 to-secondary-100 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h2>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              variants={itemVariants}
              className="mx-auto max-w-4xl mb-12"
            >
              <div 
                className="text-xl md:text-2xl text-ocean-100 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            </motion.div>
          )}

          {/* Action Items Grid */}
          {items && items.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-ocean-200 text-sm">{item.description}</p>
                  )}
                  {item.href && (
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-secondary-200 font-medium mt-3 text-sm"
                    >
                      Learn More
                      <IconDroplet className="w-4 h-4" />
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Main CTA Button */}
          {text && href && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <CTA
                  callToAction={callToAction as CallToActionType}
                  containerClass=""
                  linkClass="inline-flex items-center gap-3 bg-white text-ocean-900 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 text-lg group-hover:bg-ocean-50 border-2 border-transparent hover:border-white/20"
                  iconClass="w-6 h-6 transition-transform group-hover:translate-x-1"
                />
              </motion.div>

              {/* Secondary action */}
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <button className="inline-flex items-center gap-3 glass backdrop-blur-xl text-white font-semibold px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/10 transition-all duration-300">
                  <span>Learn More</span>
                  <IconRipple className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Impact Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "15K+", label: "Funding Secured" },
              { number: "2", label: "Countries" },
              { number: "100+", label: "Data Points" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-ocean-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 fill-white dark:fill-slate-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
