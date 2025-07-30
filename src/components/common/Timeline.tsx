'use client';

import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { Timeline as TimelineType } from '~/shared/types';
import {
  IconArrowsRightLeft,
  IconBulb,
  IconListCheck,
  IconArrowDown,
  IconMapPin,
  IconPhoneCall,
  IconClock,
  IconMail,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconDownload,
  IconComponents,
  IconRocket,
  IconCheck,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
} from '@tabler/icons-react';

const iconMap: { [key: string]: React.ElementType } = {
  IconArrowsRightLeft,
  IconBulb,
  IconListCheck,
  IconArrowDown,
  IconMapPin,
  IconPhoneCall,
  IconClock,
  IconMail,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconDownload,
  IconComponents,
  IconRocket,
  IconCheck,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const Timeline = ({
  id,
  items,
  defaultIcon: DefaultIconProp,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
}: TimelineType) => {
  return (
    <>
      {items && items.length && (
        <motion.div
          className={twMerge('', containerClass)}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map(({ title, description, icon: itemIcon }, index = 0) => {
            const ItemIconComponent = typeof itemIcon === 'string' 
              ? iconMap[itemIcon] 
              : (typeof itemIcon === 'function' ? itemIcon : null);
            const DefaultIconComponent = typeof DefaultIconProp === 'string' 
              ? iconMap[DefaultIconProp] 
              : (typeof DefaultIconProp === 'function' ? DefaultIconProp : null);

            return (
              <motion.div
                key={id ? `item-${id}-${index}` : `item-timeline-${index}`}
                className={twMerge('flex', panelClass)}
                variants={itemVariants}
              >
                <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                  <div
                    className={`flex items-center justify-center ${
                      index !== items.length - 1 ? '' : 'text-slate-200 rounded-full bg-primary-900'
                    }`}
                  >
                    {ItemIconComponent ? (
                      <ItemIconComponent className={twMerge('w-10 h-10 p-2 rounded-full border-2', iconClass)} />
                    ) : DefaultIconComponent ? (
                      <DefaultIconComponent className={twMerge('w-10 h-10 p-2 rounded-full border-2', iconClass)} />
                    ) : null}
                  </div>

                  {index !== items.length - 1 && <div className="w-px h-full bg-black/10 dark:bg-slate-400/50" />}
                </div>
                <div className={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                  {title && (
                    <h3 className={twMerge('text-xl font-bold text-gray-900 dark:text-slate-300 mb-2', titleClass)}>
                      {title}
                    </h3>
                  )}
                  {description && (
                    <p 
                      className={twMerge('text-gray-600 dark:text-slate-400', descriptionClass)}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default Timeline;
