import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';

import MDXComponents from '@/components/MDXComponents';
import PageLayout from '@/components/Layout';
import GlobalStyle from '@/styles/GlobalStyles';
import customTheme from '@/styles/theme';

import SEO from '../next-seo.config';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <MDXProvider components={MDXComponents}>
        <PageLayout>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <Component {...pageProps} />;
        </PageLayout>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default App;
