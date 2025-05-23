'use client';

import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import * as TablerIcons from '@tabler/icons-react';

const Features = ({ id, header, items, columns = 3, hasBackground = false }: FeaturesProps) => {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const getIcon = (iconName: string) => {
    const IconComponent = (TablerIcons as any)[iconName];
    return IconComponent ? IconComponent : TablerIcons.IconDroplet;
  };

  const getGridColumns = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 lg:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <WidgetWrapper 
      id={id || ''} 
      hasBackground={hasBackground} 
      containerClass="scroll-mt-16 max-w-7xl relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-50/20 via-transparent to-secondary-50/20 rounded-3xl" />
      
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
        className={`grid ${getGridColumns()} gap-8 relative z-10`}
      >
        {items?.map((item, index) => {
          const iconName = typeof item.icon === 'string' ? item.icon : 'IconDroplet';
          const IconComponent = getIcon(iconName);
          
          return (
            <motion.div
              key={`feature-${index}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Floating Card */}
              <div className="relative h-full">
                {/* Glass Card */}
                <div className="glass backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-primary-300/30">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/10 to-secondary-50/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-2xl shadow-lg group-hover:shadow-ocean mb-4"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <div 
                      className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{ __html: item.description || '' }}
                    />

                    {/* Call to Action */}
                    {item.callToAction && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300"
                      >
                        <span>{item.callToAction.text}</span>
                        <IconChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}

                    {/* Link indicator */}
                    {item.href && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <IconExternalLink className="w-5 h-5 text-primary-500" />
                      </motion.div>
                    )}
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary-400 to-transparent" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-coral rounded-full opacity-70 blur-sm"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 5, 0],
                    rotate: [0, -1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-ocean rounded-full opacity-60 blur-sm"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex justify-center mt-16"
      >
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="w-2 h-2 bg-primary-400 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </WidgetWrapper>
  );
};

export default Features;
