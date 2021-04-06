import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';

import MDXComponents from '@/components/MDXComponents';
import PageLayout from '@/components/Layout';
import GlobalStyle from '@/styles/GlobalStyles';
import customTheme from '@/styles/theme';

import { handleExitComplete } from 'utils/handleExitComplete';
import SEO from '../next-seo.config';

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={customTheme}>
      <MDXProvider components={MDXComponents}>
        <PageLayout>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter exitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.pathname} />;
          </AnimatePresence>
        </PageLayout>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default App;
