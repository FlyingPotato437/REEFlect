'use client';

import { twMerge } from 'tailwind-merge';
import type { ItemGrid as ItemGridType } from '~/shared/types';
import CTA from './CTA';
import {
  IconAdjustments,
  IconArrowsRightLeft,
  IconBulb,
  IconListCheck,
  IconArrowDown,
  IconArrowDownRight,
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
  IconBrandTailwind,
  IconChevronsRight,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
  IconBook,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

// Map string names to actual icon components
const iconMap: { [key: string]: React.ElementType } = {
  IconAdjustments,
  IconArrowsRightLeft,
  IconBulb,
  IconListCheck,
  IconArrowDown,
  IconArrowDownRight,
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
  IconBrandTailwind,
  IconChevronsRight,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
  IconBook,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
};

const containerVariants = {
  hidden: { opacity: 1 }, // Start with opacity 1 for the container itself
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Each child will animate 0.15s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Animate to visible and original position
};

const ItemGrid = ({
  id,
  items,
  columns,
  defaultColumns,
  defaultIcon: defaultIconPropValue,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
}: ItemGridType) => {
  // Resolve DefaultIconComponent if defaultIconPropValue is a string name
  let ResolvedDefaultIconComponent: React.ElementType | undefined;
  if (defaultIconPropValue) {
    if (typeof defaultIconPropValue === 'string') {
      ResolvedDefaultIconComponent = iconMap[defaultIconPropValue];
    } else {
      // If it's not a string, assume it's already a component (legacy or direct pass-through)
      ResolvedDefaultIconComponent = defaultIconPropValue;
    }
  }

  return (
    <>
      {items && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className={twMerge(
            `grid mx-auto gap-8 md:gap-y-12 ${
              (columns || defaultColumns) === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
                : (columns || defaultColumns) === 3
                ? 'lg:grid-cols-3 sm:grid-cols-2'
                : (columns || defaultColumns) === 2
                ? 'sm:grid-cols-2'
                : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon, callToAction }, index) => {
            const iconNameString = typeof icon === 'string' ? icon : undefined;
            const IconToRender = iconNameString ? iconMap[iconNameString] : null;
            return (
              <motion.div
                key={id ? `item-${id}-${index}` : `item-grid-${index}`}
                variants={itemVariants}
                // `initial` and `animate` for items are controlled by parent's `staggerChildren`
              >
                <div className={(twMerge('flex flex-row max-w-md'), panelClass)}>
                  <div className="flex justify-center">
                    {IconToRender ? (
                      <IconToRender className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />
                    ) : ResolvedDefaultIconComponent ? (
                      <ResolvedDefaultIconComponent className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />
                    ) : null}
                  </div>
                  <div className="mt-0.5">
                    {title && <h3 className={twMerge('text-xl font-bold', titleClass)}>{title}</h3>}
                    {description && (
                      <p
                        className={twMerge(`text-gray-600 dark:text-slate-400 ${title ? 'mt-3' : ''}`, descriptionClass)}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    )}
                    {callToAction && (
                      <CTA
                        callToAction={callToAction}
                        linkClass={twMerge(
                          `${
                            title || description ? 'mt-3' : ''
                          } text-primary font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer`,
                          actionClass,
                        )}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default ItemGrid;
