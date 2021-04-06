import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import customTheme from '@/styles/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/og.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
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
