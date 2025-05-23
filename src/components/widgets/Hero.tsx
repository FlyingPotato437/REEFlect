'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import { IconRipple, IconDroplet, IconWorld, IconRocket } from '@tabler/icons-react';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statsData = [
    { icon: IconDroplet, value: "$15K+", label: "Grant Funding Secured" },
    { icon: IconWorld, value: "2", label: "Countries Impacted" },
    { icon: IconRipple, value: "100+", label: "Data Points Collected" },
    { icon: IconRocket, value: "5+", label: "Tech Deployments" },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-500 via-primary-500 to-secondary-600" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: y1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-ocean-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-16 h-16 glass rounded-2xl flex items-center justify-center"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ y: y2 }}
      >
        <IconRipple className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.div 
        className="absolute top-32 right-32 w-20 h-20 glass rounded-full flex items-center justify-center"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ y: y1, animationDelay: '1s' }}
      >
        <IconDroplet className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div 
        className="absolute bottom-32 left-32 w-12 h-12 glass rounded-xl flex items-center justify-center"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ y: y2, animationDelay: '2s' }}
      >
        <IconWorld className="w-6 h-6 text-white" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {/* Tagline */}
          {tagline && (
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            >
              <IconRipple className="w-5 h-5 text-secondary-200" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                {tagline}
              </span>
            </motion.div>
          )}

          {/* Main Title */}
          {title && (
            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-8"
            >
              <span className="text-white">REEF</span>
              <span className="text-gradient-to-r from-secondary-200 to-ocean-200 bg-clip-text text-transparent">lect</span>
            </motion.h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              variants={itemVariants}
              className="mx-auto max-w-4xl mb-12"
            >
              <p className="text-xl md:text-2xl text-ocean-100 font-light leading-relaxed">
                {subtitle}
              </p>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {callToAction && (
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <CTA
                  callToAction={callToAction}
                  linkClass="inline-flex items-center gap-3 bg-white text-ocean-900 font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:bg-ocean-50"
                  iconClass="w-6 h-6 transition-transform group-hover:translate-x-1"
                />
              </motion.div>
            )}
            {callToAction2 && (
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <CTA
                  callToAction={callToAction2}
                  linkClass="inline-flex items-center gap-3 glass text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30"
                  iconClass="w-6 h-6 transition-transform group-hover:translate-x-1"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-secondary-200 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-ocean-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Image */}
          {image && (
            <motion.div
              variants={itemVariants}
              className="relative mx-auto max-w-6xl"
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/50 to-transparent z-10" />
                <Image
                  className="w-full h-auto"
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  loading="eager"
                  priority
                />
                
                {/* Floating Labels on Image */}
                <motion.div
                  className="absolute top-8 right-8 glass rounded-xl px-4 py-2 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                >
                  <span className="text-white text-sm font-semibold">Smart Buoy Deployed</span>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-8 left-8 glass rounded-xl px-4 py-2 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <span className="text-white text-sm font-semibold">Real-time Ocean Data</span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-white dark:fill-slate-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </motion.section>
  );
};

export default Hero;
