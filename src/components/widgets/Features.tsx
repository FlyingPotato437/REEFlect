'use client';

import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features = ({ id, header, items, columns = 3, hasBackground = false }: FeaturesProps) => {
  // Define panelClass based on the number of columns for better control
  let panelClass = 'flex max-w-full'; // Default for other column counts
  if (columns === 3) {
    // Specific styling for 3-column layout (e.g., Mission & Values)
    // Card-like: flex column, items center, text center, padding, rounded, shadow, background, full height
    panelClass = 'flex flex-col items-center text-center p-6 rounded-lg shadow-md dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800 h-full';
  } else if (columns === 2) {
    panelClass = 'flex max-w-full sm:max-w-md mx-auto'; // Original for 2 columns
  }
  // For 3 columns, icons might look better larger and with more bottom margin
  const iconClass = columns === 3 ? 
    "h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-md text-white bg-primary-500 dark:bg-primary-600 p-2 md:p-3 mt-1.5 mb-6" :
    "h-12 w-12 flex items-center justify-center rounded-md text-white bg-primary-900 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0";

  return (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="scroll-mt-16 max-w-6xl">
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={2} // Retained original default
      containerClass={`pb-6 ${columns === 2 ? 'max-w-5xl' : ''}`}
      panelClass={panelClass} // Use the determined panelClass
      iconClass={iconClass} // Use the determined iconClass
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="justify-start" // May not be used if no CTAs in these items
    />
  </WidgetWrapper>
)};

export default Features;
