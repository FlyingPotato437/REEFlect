import { StatsProps } from '~/shared/types';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import Headline from '~/components/common/Headline';

const Stats = ({ id, items, hasBackground = false }: StatsProps) => {
  const statsHeader = {
    title: 'Our Achievements', // Changed from "Our Members" - adjust if needed
    // subtitle: 'Key metrics demonstrating our impact and reach.', // Optional subtitle
  };

  return (
    <WidgetWrapper
      id={id || 'stats-section'}
      hasBackground={hasBackground}
      containerClass="scroll-mt-16 max-w-6xl py-8 md:py-12" // Consistent padding
    >
      {/* Using Headline component for the title, centered */}
      <Headline header={statsHeader} titleClass="text-3xl md:text-4xl text-center mb-8 md:mb-12" />
      
      {/* Responsive grid for stats items, with centered text for each item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 text-center">
        {items && items.map(({ title, description }, index) => (
          <div key={index} className="p-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">{title}</h3>
            {description && (
              <p 
                className="mt-2 text-md text-gray-700 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: description as string }}
              />
            )}
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default Stats;