'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'white' | 'dark';
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const textSizeClasses = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
};

export default function Logo({ 
  size = 'md', 
  className = '', 
  showText = true, 
  variant = 'default' 
}: LogoProps) {
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const waveVariants = {
    animate: {
      pathLength: [0, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          primary: '#ffffff',
          secondary: '#f0f9ff',
          accent: '#e0f2fe',
          text: '#ffffff'
        };
      case 'dark':
        return {
          primary: '#0c4a6e',
          secondary: '#075985',
          accent: '#0ea5e9',
          text: '#0c4a6e'
        };
      default:
        return {
          primary: '#06b6d4',
          secondary: '#0891b2',
          accent: '#14b8a6',
          text: '#0c4a6e'
        };
    }
  };

  const colors = getColors();

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      variants={iconVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <linearGradient id="coralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.accent} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Ocean Base Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#oceanGradient)"
            className="drop-shadow-lg"
          />
          
          {/* Waves */}
          <motion.path
            d="M15 35 Q35 25 55 35 T85 35"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={waveVariants}
            animate="animate"
          />
          <motion.path
            d="M20 45 Q40 35 60 45 T90 45"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            variants={waveVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
          />
          <motion.path
            d="M10 55 Q30 45 50 55 T80 55"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            variants={waveVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Coral/Reef Elements */}
          <path
            d="M30 65 Q35 55 40 65 Q45 55 50 65 Q55 55 60 65"
            fill="url(#coralGradient)"
            className="opacity-80"
          />
          
          {/* Buoy/Tech Element */}
          <circle
            cx="70"
            cy="25"
            r="8"
            fill="rgba(255,255,255,0.9)"
            filter="url(#glow)"
          />
          <circle
            cx="70"
            cy="25"
            r="4"
            fill={colors.accent}
          />
          
          {/* Data Points */}
          <circle cx="25" cy="30" r="1.5" fill="rgba(255,255,255,0.8)" />
          <circle cx="75" cy="40" r="1.5" fill="rgba(255,255,255,0.8)" />
          <circle cx="35" cy="25" r="1.5" fill="rgba(255,255,255,0.8)" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span 
            className={`font-display font-bold ${textSizeClasses[size]} leading-none tracking-tight`}
            style={{ color: colors.text }}
          >
            REEF<span className="text-gradient-ocean">lect</span>
          </span>
          {size !== 'sm' && (
            <span 
              className="text-xs font-medium tracking-wider opacity-75 mt-0.5"
              style={{ color: colors.text }}
            >
              OCEAN CONSERVATION
            </span>
          )}
        </motion.div>
      )}
    </motion.div>
  );
} 