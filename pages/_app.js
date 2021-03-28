import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import customTheme from 'utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
