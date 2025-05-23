'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { footerData2 } from '~/shared/data/global.data';
import Logo from '../common/Logo';
import { IconRipple, IconDroplet, IconHeart, IconMapPin, IconMail, IconExternalLink } from '@tabler/icons-react';

const Footer2 = () => {
  const { links, columns, socials, footNote } = footerData2;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Ocean Wave Header */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-gradient-ocean"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      {/* Background */}
      <div className="bg-gradient-to-br from-ocean-900 via-primary-900 to-secondary-900 pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-ocean-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-16"
          >
            {/* Top Section with Logo and Mission */}
            <motion.div variants={itemVariants} className="mb-16 text-center">
              <div className="flex justify-center mb-8">
                <Logo size="lg" showText={true} variant="white" />
              </div>
              <p className="text-xl text-ocean-100 max-w-3xl mx-auto leading-relaxed font-light">
                Empowering the next generation of ocean conservationists through innovative technology, 
                community action, and open-source collaboration.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Organization Info */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <IconDroplet className="w-6 h-6 text-secondary-400" />
                    About REEFlect
                  </h3>
                  <div className="space-y-4 text-ocean-200">
                    <div className="flex items-start gap-3">
                      <IconMapPin className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                      <span>Based in Dublin, CA with global impact initiatives</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconMail className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                      <a href="mailto:srikanthsamy@reeflect.org" className="hover:text-white transition-colors duration-200">
                        srikanthsamy@reeflect.org
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconHeart className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                      <span>501(c)(3) Nonprofit Organization</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dynamic Columns */}
              {columns.map(({ title, texts }, index) => (
                <motion.div
                  key={`column-${index}`}
                  variants={itemVariants}
                  className="glass backdrop-blur-xl rounded-3xl p-6 border border-white/20"
                >
                  <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <IconRipple className="w-5 h-5 text-secondary-400" />
                    {title}
                  </h3>
                  <div className="space-y-3">
                    {texts?.map((text, textIndex) => (
                      <p key={`text-${textIndex}`} className="text-ocean-200 leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links Section */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="font-display text-2xl font-bold text-white mb-8">
                Connect With Our Mission
              </h3>
              <div className="flex justify-center gap-4 flex-wrap">
                {socials.map(({ label, icon: Icon, href }, index) => (
                  <motion.a
                    key={`social-${index}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className="w-16 h-16 glass backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 hover:border-secondary-300/50 transition-all duration-300">
                      {Icon && <Icon className="w-7 h-7 text-white group-hover:text-secondary-200 transition-colors duration-300" />}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-ocean-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Bottom Links and Copyright */}
            <motion.div variants={itemVariants}>
              <div className="pt-8 border-t border-white/20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  {/* Links */}
                  <div className="flex flex-wrap justify-center gap-6">
                    {links?.map(({ label, href }, index) => (
                      <motion.a
                        key={`link-${index}`}
                        href={href}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 text-ocean-200 hover:text-white transition-colors duration-200 font-medium"
                      >
                        <span>{label}</span>
                        <IconExternalLink className="w-3 h-3" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Copyright */}
                  <div className="text-ocean-300 text-sm text-center md:text-right">
                    {footNote && typeof footNote !== 'string' ? React.cloneElement(footNote) : footNote}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Ready to Make Waves?
                </h3>
                <p className="text-ocean-200 mb-8 text-lg">
                  Join our community of ocean conservationists and help protect marine ecosystems for future generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://vke4l91re98.typeform.com/to/HhXKC86e"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-ocean-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <IconHeart className="w-5 h-5" />
                    <span>Volunteer Now</span>
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 glass backdrop-blur-xl text-white font-semibold px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <IconMail className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
