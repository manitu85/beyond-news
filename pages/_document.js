import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import customTheme from '@/styles/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,300&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/og.png" type="image/png" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
