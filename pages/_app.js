import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';

import MDXComponents from '@/components/MDXComponents';
import PageLayout from '@/components/Layout';
import GlobalStyle from '@/styles/GlobalStyles';
import customTheme from '@/styles/theme';

import SEO from '../next-seo.config';

function App({ Component, pageProps }) {
  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <ChakraProvider theme={customTheme}>
      <MDXProvider components={MDXComponents}>
        <PageLayout>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter exitComplete={handleExitComplete}>
            <Component {...pageProps} />;
          </AnimatePresence>
        </PageLayout>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default App;
