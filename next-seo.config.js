const title = 'Retrieve articles and breaking news headlines from NEWS API';
const titleTemplate = 'Beyond News | %s';
const description =
  'Beyond News is Next js app with chakra-ui and react mdx is part of my portfolio';

const SEO = {
  titleTemplate,
  description,
  canonical: 'https://beyond-news.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://beyond-news.vercel.app/',
    title,
    description,
    site_name: 'Beyond News',
    images: [
      {
        url: 'https://beyond-news.vercel.app//og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
