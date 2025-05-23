'use client';

import { useRef, useState } from 'react';
import { IconRss } from '@tabler/icons-react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';
import Link from 'next/link';
import Logo from '~/components/common/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import { CallToActionType } from '~/shared/types';
import { motion } from 'framer-motion';

const Header = () => {
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

  const ref = useRef(null);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useOnClickOutside(ref, () => {
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`top-0 z-50 mx-auto w-full flex-none transition-all duration-300 ease-in-out ${
        isSticky ? 'sticky glass backdrop-blur-xl border-b border-white/10' : 'relative'
      } ${isToggleMenuOpen ? 'h-screen md:h-auto' : 'h-auto'}`}
      id="header"
    >
      <div className="mx-auto w-full max-w-7xl md:flex md:justify-between md:py-4 md:px-6">
        <div
          className={`flex justify-between py-4 px-6 md:py-0 md:px-0 ${
            isToggleMenuOpen
              ? 'md:bg-transparent md:dark:bg-transparent md:border-none glass backdrop-blur-xl border-b border-white/10'
              : ''
          }`}
        >
          <Link
            className="flex items-center group"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo size="md" showText={true} variant="default" />
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>
        
        <nav
          className={`${isToggleMenuOpen ? 'block px-6' : 'hidden'} h-screen md:w-full ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } w-auto overflow-y-auto text-slate-800 dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul
            ref={ref}
            className="flex w-full flex-col mt-4 mb-36 md:m-0 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base"
          >
            {links &&
              links.map(({ label, href, icon: Icon, links }, index) => (
                <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                  {links && links.length ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 font-semibold transition duration-300 ease-in-out text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 rounded-xl hover:bg-ocean-50/50 dark:hover:bg-ocean-900/20"
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {label}{' '}
                        {Icon && (
                          <Icon
                            className={`${
                              isDropdownOpen[index] ? 'rotate-180' : ''
                            } ml-1 rtl:ml-0 rtl:mr-1 h-4 w-4 transition-transform duration-300`}
                          />
                        )}
                      </motion.button>
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                          opacity: isDropdownOpen[index] ? 1 : 0,
                          y: isDropdownOpen[index] ? 0 : -10
                        }}
                        transition={{ duration: 0.2 }}
                        className={`${
                          isDropdownOpen[index] ? 'block' : 'md:hidden'
                        } rounded-2xl pl-4 font-medium shadow-2xl md:absolute md:min-w-[220px] md:pl-0 glass backdrop-blur-xl border border-white/20 md:border-ocean-200/20 mt-2`}
                      >
                        {links.map(({ label: label2, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                              className="block py-3 px-6 first:rounded-t-2xl last:rounded-b-2xl text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 hover:bg-ocean-50/50 dark:hover:bg-ocean-900/20 transition-all duration-200"
                              href={href2 as string}
                              onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                              }
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="flex items-center px-6 py-3 font-semibold transition duration-300 ease-in-out text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 rounded-xl hover:bg-ocean-50/50 dark:hover:bg-ocean-900/20"
                        href={href as string}
                        onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        
        <div
          className={`${
            isToggleMenuOpen ? 'block' : 'hidden'
          } fixed bottom-0 left-0 w-full justify-end p-6 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 glass backdrop-blur-xl border-t border-white/10 md:bg-transparent md:dark:bg-transparent md:border-none`}
        >
          <div className="flex w-full items-center justify-between md:w-auto gap-4">
            {showToggleTheme && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ToggleDarkMode />
              </motion.div>
            )}
            {showRssFeed && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  className="inline-flex items-center rounded-xl p-3 text-sm hover:bg-ocean-50/50 dark:hover:bg-ocean-900/20 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 transition-all duration-200"
                  aria-label="RSS Feed"
                  href=""
                >
                  <IconRss className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </Link>
              </motion.div>
            )}
            {actions && actions.length > 0 && (
              <div className="flex flex-wrap justify-end gap-3">
                {actions.map((callToAction, index) => (
                  <motion.div
                    key={`item-action-${index}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CTA
                      callToAction={callToAction as CallToActionType}
                      linkClass="btn bg-gradient-ocean text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
