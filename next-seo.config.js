const title =
  'Beyond News – Retrieve articles and breaking news headlines from NEWS API';
const description =
  'Beyond News is Next js app with chakra-ui and react mdx is part of my portfolio';

const SEO = {
  title,
  description,
  canonical: 'https://newsfeedus.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://newsfeedus.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://newsfeedus.vercel.app//og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
