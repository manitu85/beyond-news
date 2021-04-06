import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            min-height: 100vh;
            border-top: 5px solid #626cd5;
          }
          body {
            font-family: 'Open Sans';
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyle;
