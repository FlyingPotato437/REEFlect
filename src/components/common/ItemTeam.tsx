'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Team as TeamType } from '~/shared/types';
import {
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
} from '@tabler/icons-react';

const iconMap: { [key: string]: React.ElementType } = {
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
};

const ItemTeam = ({
  name,
  occupation,
  image,
  items,
  containerClass,
  imageClass,
  panelClass,
  nameClass,
  occupationClass,
  itemsClass,
}: TeamType) => {
  return (
    <div className={twMerge('', containerClass)}>
      <Image src={image.src} width={240} height={320} alt={image.alt} className={twMerge('', imageClass)} />
      <div className={twMerge('', panelClass)}>
        <h3 className={twMerge('', nameClass)}>{name}</h3>
        <p className={twMerge('', occupationClass)}>{occupation}</p>
        <ul className={twMerge('', itemsClass)}>
          {items &&
            items.map(({ title, href, icon: itemIcon }, index2) => {
              const IconComponent = typeof itemIcon === 'string'
                ? iconMap[itemIcon]
                : (typeof itemIcon === 'function' ? itemIcon : null);

              return (
                IconComponent &&
                href && (
                  <li
                    key={`team-${index2}`}
                    className="m-1 flex items-center justify-center rounded text-primary-700 hover:text-gray-500"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title as string}
                      className="flex items-center justify-center rounded-sm bg-transparent p-0.5 text-primary-900 hover:bg-primary-900 hover:text-slate-200 hover:dark:bg-slate-800 hover:dark:text-slate-200"
                    >
                      <IconComponent className="h-6 w-6 p-0.5" />
                    </a>
                  </li>
                )
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ItemTeam;
