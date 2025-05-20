'use client';

import { IconChevronDown, IconChevronUp, IconMinus, IconPlus, type TablerIcon } from '@tabler/icons-react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';
import React from 'react';

const iconMap: { [key: string]: TablerIcon } = {
  IconMinus,
  IconPlus,
  IconChevronDown,
  IconChevronUp,
};

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();

  const IconUpComponent = typeof iconUp === 'string' ? iconMap[iconUp] : iconUp;
  const IconDownComponent = typeof iconDown === 'string' ? iconMap[iconDown] : iconDown;

  return (
    <>
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          className="mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700"
        >
          <div className={classCollapseItem}>
            <div
              className="align-center flex justify-between"
              id={`accordion__heading-${index}`}
              aria-disabled="false"
              aria-expanded="false"
              aria-controls={`accordion__panel-${index}`}
              role="button"
            >
              <h2 className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">{title}</h2>
              {IconDownComponent && IconUpComponent ? (
                activeIndex === index ? (
                  <IconUpComponent className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                ) : (
                  <IconDownComponent className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                )
              ) : activeIndex === index ? (
                <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
              ) : (
                <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
              )}
            </div>
            {activeIndex === index && (
              <div
                className="mt-3 select-none"
                aria-labelledby={`accordion__heading-${index}`}
                id={`accordion__panel-${index}`}
              >
                <p className="mt-2 text-gray-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: description || '' }}></p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Collapse;
