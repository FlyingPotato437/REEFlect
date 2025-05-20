import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';
import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
  IconChevronRight,
} from '@tabler/icons-react';

// Map string names to actual icon components
const iconMap: { [key: string]: React.ElementType } = {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconUsers,
  IconMicroscope,
  IconWorld,
  IconDroplet,
  IconMovie,
  IconAward,
  IconCash,
  IconArticle,
  IconChevronRight,
};

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: iconPropValue, targetBlank } = callToAction as CallToActionType;
  
  let IconComponent: React.ElementType | null = null;
  if (iconPropValue && typeof iconPropValue === 'string') {
    IconComponent = iconMap[iconPropValue];
  }
  // If iconPropValue was theoretically a direct TablerIcon component (which we are moving away from in data),
  // this simple approach would not render it. The goal is to rely on string names from data.

  return (
    <>
      {href && (text || IconComponent) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          {targetBlank ? (
            <Link
              className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {IconComponent && <IconComponent className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
              {text}
            </Link>
          ) : (
            <Link className={twMerge('inline-flex items-center justify-center w-full sm:mb-0 ', linkClass)} href={href}>
              {IconComponent && <IconComponent className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
              {text}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
