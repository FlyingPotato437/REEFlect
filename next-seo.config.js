// tailnext/next-seo.config.js
const seoConfig = {
    title: 'REEFlect',
    description: 'REEFlect is a high school led environmental initiative that aims to raise awareness about the importance of protecting our oceans and marine life.',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://reeflect.org/',
      site_name: 'REEFlect',
      title: 'REEFlect - a High School led Environmental Initiative',
      description: 'REEFlect is a high school led environmental initiative that aims to raise awareness about the importance of protecting our oceans and marine life.',
      images: [
        {
          url: 'https://reeflect.org/og-image.jpg',
          width: 800,
          height: 600,
          alt: 'REEFlect',
        },
      ],
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },
  };
  
  export default seoConfig;