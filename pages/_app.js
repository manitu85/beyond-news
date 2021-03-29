import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import PageLayout from '@/components/Layout';
import customTheme from 'utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <PageLayout>
        <Component {...pageProps} />;
      </PageLayout>
    </ChakraProvider>
  );
}

export default MyApp;
