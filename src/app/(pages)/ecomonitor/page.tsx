'use client'

import Hero from '~/components/widgets/Hero';
import { REEFlect } from '~/components/widgets/REEFlect';
import { heroEcomonitor } from '~/shared/data/pages/ecomonitor.data';

const Page = () => {
  return (
    <>
      <Hero {...heroEcomonitor} />
      <div id="reeflect-tool">
        <REEFlect />
      </div>
    </>
  );
};

export default Page;