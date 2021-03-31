import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';

import MDXComponents from '@/components/MDXComponents';
import PageLayout from '@/components/Layout';
import GlobalStyle from '@/styles/GlobalStyles';
import customTheme from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <MDXProvider components={MDXComponents}>
        <PageLayout>
          <GlobalStyle />
          <Component {...pageProps} />;
        </PageLayout>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
