import { NextSeo } from 'next-seo';
import seoConfig from '../../next-seo.config';

interface OpenGraph {
  type: string;
  locale: string;
  url: string;
  site_name: string;
  title: string;
  description: string; // Add the 'description' property
}

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url }) => {
  return (
    <NextSeo
      title={title || seoConfig.title}
      description={description || seoConfig.description}
      openGraph={{
        ...seoConfig.openGraph,
        url: url || seoConfig.openGraph.url,
        title: title || seoConfig.openGraph.title,
        description: description || seoConfig.openGraph.description,
      }}
      twitter={{
        ...seoConfig.twitter,
      }}
    />
  );
};

export default SEO;