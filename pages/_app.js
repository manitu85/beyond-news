import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import PageLayout from '@/components/Layout';
import GlobalStyle from '@/styles/GlobalStyles';
import customTheme from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <PageLayout>
        <GlobalStyle />
        <Component {...pageProps} />;
      </PageLayout>
    </ChakraProvider>
  );
}

export default MyApp;
