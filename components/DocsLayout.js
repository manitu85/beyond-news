import React from 'react';
import { NextSeo } from 'next-seo';
import { Box } from '@chakra-ui/react';

const DocsLayout = ({ children, title }) => (
  <>
    <NextSeo title={title} />
    <Box as="main" maxW="800px" mx="auto" px={8} w="100%" wordBreak="break-all">
      {children}
    </Box>
  </>
);

export default DocsLayout;
